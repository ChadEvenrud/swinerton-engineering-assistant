# Week 2 — Apache Kafka

Producers write events to topics. Consumers read those events. Brokers retain events so they can be replayed.

## Required exercise

Start Kafka (Docker is recommended), create a topic, send messages, consume them, stop the consumer, produce additional messages, restart the consumer, and observe what happens.

Event:

```json
{
  "eventType": "EngineeringQuestionSubmitted",
  "question": "What does this error mean?",
  "timestamp": "..."
}
```

Local broker:

```bash
docker compose --profile kafka up
```

## Submit

Copy `submissions/week-02/TEMPLATE.md` to `submissions/week-02/<your-github-username>/README.md`. Include notes, screenshots, and any producer/consumer code you wrote.
