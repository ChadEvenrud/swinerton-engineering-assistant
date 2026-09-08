# Week 4 — RabbitMQ and broker choice

Take the Kafka program from Week 3 and replace Kafka with RabbitMQ. Same `EngineeringQuestionSubmitted` event. Then choose a broker and explain why.

## Required exercise

Python producer → RabbitMQ → Python worker.

```bash
docker compose --profile rabbitmq up
```

Management UI defaults to http://localhost:15672 (guest / guest on a local compose stack).

## Architecture challenge

Which technology would you choose, and why?

1. An ERP publishes every employee update and five enterprise systems consume those events.
2. A user submits a document that needs to be processed by one available AI worker.
3. What should this team use for the Engineering Assistant, and why?

## Submit

Copy `submissions/week-04/TEMPLATE.md` to `submissions/week-04/<your-github-username>/README.md`.
