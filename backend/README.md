# Backend

REST API that accepts a question, publishes `EngineeringQuestionSubmitted` to the broker, and exposes a way to read the completed answer.

Suggested stack from the curriculum: FastAPI (or similar). This service is the producer. It should not block on the model.
