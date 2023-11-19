# Message Wall API

The Message Wall API is a service that allows users to share messages anonymously on a virtual wall. This API provides a simple and interactive platform for expressing thoughts, feelings, and messages, fostering open and anonymous communication.

## Key Features

- **Message Creation:** Users can post messages on the wall anonymously.
- **Message Retrieval:** The API offers endpoints to retrieve messages from the wall, providing a reading experience for users.
- **Anonymity:** The system preserves the identity of users, encouraging honesty and freedom of expression.


## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Create a PostgreSQL database with whatever name you want
4. Configure the `.env` file using the `.env.example` file (see "Running application locally or inside docker section" for details)
5. Run all migrations

```bash
npx prisma generate
```

6. Run the back-end in a development environment:

```bash
npm run dev
```
