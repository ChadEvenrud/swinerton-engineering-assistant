# Week 3 — RabbitMQ

Take the Kafka program from Week 2 and replace Kafka with RabbitMQ. Same `EngineeringQuestionSubmitted` event.

The point is the question: why would I choose Kafka here instead of RabbitMQ?

## Required exercise

Python producer → RabbitMQ → Python worker. Same event as Week 2.

```bash
docker compose --profile rabbitmq up
```

Management UI defaults to http://localhost:15672 (guest / guest on a local compose stack).

## Submit

Copy `submissions/week-03/TEMPLATE.md` to `submissions/week-03/<your-github-username>/README.md`.
