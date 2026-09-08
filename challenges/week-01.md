# Week 1 — Messaging Fundamentals

The goal is not code yet. Understand why messaging exists.

## Topics

Synchronous vs asynchronous, producers, consumers, messages/events, queues, topics, brokers, pub/sub, acknowledgement, retries, dead-letter queues, ordering, idempotency.

## Assignment

Draw this architecture, then answer: what happens if Consumer B is unavailable when the producer sends the message?

```
Application A
      |
      v
 Message Broker
      |
  +---+---+
  |       |
  v       v
Consumer Consumer
   A         B
```

## Submit

Copy `submissions/week-01/TEMPLATE.md` to `submissions/week-01/<your-github-username>/README.md` and open a pull request.
