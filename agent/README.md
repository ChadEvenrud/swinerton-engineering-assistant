# Agent

Worker that consumes `EngineeringQuestionSubmitted`, calls an LLM, and returns a result.

Keep this piece simple. Hackathon #1 is about event-driven architecture and GitHub delivery, not RAG or multi-agent orchestration.

If the worker is down, the message should wait. If it crashes mid-job, retries and idempotency matter more than a fancy prompt. Store API keys in secrets, never in source.
