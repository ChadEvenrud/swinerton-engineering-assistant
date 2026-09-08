(() => {
  const canvas = document.getElementById("starfield");
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");

  if (nav) {
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  const starfield = () => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const stars = [];
    const COUNT = 180;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const spawn = () => {
      stars.length = 0;
      for (let i = 0; i < COUNT; i += 1) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.4 + 0.2,
          a: Math.random() * 0.7 + 0.15,
          s: Math.random() * 0.25 + 0.05,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.y -= star.s;
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }
        ctx.beginPath();
        ctx.fillStyle = `rgba(168, 228, 255, ${star.a})`;
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(draw);
    };

    resize();
    spawn();
    draw();
    window.addEventListener("resize", () => {
      resize();
      spawn();
    });
  };

  const messagingFlow = () => {
    const stage = document.querySelector(".flow-stage");
    const el = document.getElementById("flow-canvas");
    if (!stage || !el) return;

    const ctx = el.getContext("2d");
    const dataNode = stage.querySelector(".flow-node.data");
    const brokerNode = stage.querySelector(".flow-node.broker");
    const agentNode = stage.querySelector(".flow-node.agent");
    const slots = [...stage.querySelectorAll(".queue i")];

    const center = (node, edge) => {
      const s = stage.getBoundingClientRect();
      const r = node.getBoundingClientRect();
      const x = r.left - s.left + r.width / 2;
      const y =
        edge === "bottom"
          ? r.bottom - s.top + 6
          : edge === "top"
            ? r.top - s.top - 6
            : r.top - s.top + r.height / 2;
      return { x, y };
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const { width, height } = stage.getBoundingClientRect();
      el.width = width * dpr;
      el.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const packets = [];
    const queue = [];
    let lastSpawn = 0;
    let lastConsume = 0;
    let readingUntil = 0;

    const spawnPacket = () => {
      if (packets.filter((p) => p.phase === "toBroker").length > 1) return;
      if (queue.length >= slots.length) return;
      const from = center(dataNode, "bottom");
      const to = center(brokerNode, "top");
      packets.push({
        phase: "toBroker",
        t: 0,
        x: from.x,
        y: from.y,
        from,
        to,
      });
    };

    const lerp = (a, b, t) => a + (b - a) * t;
    const ease = (t) => 1 - (1 - t) ** 2;

    const drawPacket = (x, y, alpha) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(x, y);
      ctx.beginPath();
      const w = 16;
      const h = 11;
      ctx.roundRect(-w / 2, -h / 2, w, h, 3);
      ctx.fillStyle = "#d9fbff";
      ctx.shadowColor = "#5ee7ff";
      ctx.shadowBlur = 14;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.strokeStyle = "rgba(94, 231, 255, 0.9)";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(-5, -2);
      ctx.lineTo(0, 2);
      ctx.lineTo(5, -2);
      ctx.strokeStyle = "#003561";
      ctx.lineWidth = 1.4;
      ctx.stroke();
      ctx.restore();
    };

    const draw = (now) => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      ctx.clearRect(0, 0, w, h);

      if (now - lastSpawn > 1100) {
        spawnPacket();
        lastSpawn = now;
      }

      packets.forEach((packet) => {
        packet.t = Math.min(1, packet.t + 0.018);
        const t = ease(packet.t);
        packet.x = lerp(packet.from.x, packet.to.x, t);
        packet.y = lerp(packet.from.y, packet.to.y, t);
        drawPacket(packet.x, packet.y, packet.phase === "toAgent" && packet.t > 0.85 ? 1 - (packet.t - 0.85) / 0.15 : 1);
      });

      const arrived = [];
      packets.forEach((packet, i) => {
        if (packet.t < 1) return;
        if (packet.phase === "toBroker") {
          queue.push(true);
          arrived.push(i);
        } else if (packet.phase === "toAgent") {
          readingUntil = now + 420;
          arrived.push(i);
        }
      });
      arrived.reverse().forEach((i) => packets.splice(i, 1));

      if (queue.length && now - lastConsume > 1600) {
        const from = center(brokerNode, "bottom");
        const to = center(agentNode, "top");
        packets.push({
          phase: "toAgent",
          t: 0,
          x: from.x,
          y: from.y,
          from,
          to,
        });
        queue.shift();
        lastConsume = now;
      }

      slots.forEach((slot, i) => slot.classList.toggle("filled", i < queue.length));
      agentNode.classList.toggle("reading", now < readingUntil);

      requestAnimationFrame(draw);
    };

    resize();
    requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
  };

  starfield();
  messagingFlow();
})();
