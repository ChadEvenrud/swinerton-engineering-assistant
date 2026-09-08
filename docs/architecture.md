# Architecture

Capture the team's design here as it firms up. The challenge gives a business requirement, not an exact architecture.

## Current intent

```
User
  → Frontend (React or similar)
    → REST
  → Backend API
    → Publish EngineeringQuestionSubmitted
  → Kafka or RabbitMQ
    → Consume
  → Agent worker (LLM call)
    → Result
  → Backend → Frontend
```

## Decisions to record

- Broker choice (Kafka vs RabbitMQ) and why
- How the frontend learns the answer is ready (poll vs subscribe)
- Retry and failure behavior if the worker is down
- How secrets are supplied in local dev vs GitHub Actions

## Collaboration

Product work and weekly challenge submissions share this repo. See [CONTRIBUTING.md](../CONTRIBUTING.md).
