# Swinerton Engineering Assistant

Shared team repo for **Swinerton Engineering Hackathon #1**.

- **Team site:** https://chadevenrud.github.io/swinerton-engineering-assistant/
- **Curriculum:** https://chadevenrud.github.io/swinerton-engineering-hackathon/
- **How to contribute:** [CONTRIBUTING.md](CONTRIBUTING.md)

## Two tracks

1. **Build the Engineering Assistant** — frontend, backend, Kafka or RabbitMQ, AI worker.
2. **Weekly challenges** — each person submits a pull request under `submissions/week-NN/<github-username>/`.

Do not push to `main`. Branches and pull requests are the workflow.

## Weekly hand-in

```
submissions/week-01/your-github-username/README.md
```

Copy that week's `TEMPLATE.md`, answer it, open a PR titled `Week N: yourname`. Assignment briefs are in [`challenges/`](challenges/).

## Product layout

```
frontend/     Question form + result view
backend/      REST API, event producer, result endpoint
agent/        Consumer + AI worker
messaging/    Event schema and broker helpers
tests/        Automated tests
docs/         Team site (GitHub Pages)
```

```
User → Frontend → Backend API → Kafka / RabbitMQ → Agent worker → Backend → Frontend
```

## Local brokers

```bash
docker compose --profile kafka up
docker compose --profile rabbitmq up
```

Copy `.env.example` to `.env`. Never commit credentials.

## Event contract

```json
{
  "eventType": "EngineeringQuestionSubmitted",
  "question": "What does this error mean?",
  "timestamp": "..."
}
```
