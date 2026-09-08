# Messaging

Shared event schema, producer/consumer helpers, and notes for Kafka or RabbitMQ.

Event the system publishes and consumes:

```json
{
  "eventType": "EngineeringQuestionSubmitted",
  "question": "What does this error mean?",
  "timestamp": "..."
}
```
