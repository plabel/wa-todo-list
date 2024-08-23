# SIMPLE TODO LIST

This is a simple todo list.

## ⏯️ Youtube demo video (https://youtu.be/hO11xjyTPXA)

[![Watch the video](https://img.youtube.com/vi/hO11xjyTPXA/maxresdefault.jpg)](https://youtu.be/hO11xjyTPXA)

## A few comments

- Typescript to add type support, Eslint for linting and Jest for Unit testing
- Supertest for integration testing
- Cypress for e2e testing
- MUI for style
- Prisma/SQLITE for the DB

## Prerequisites

Please:
- Install Node 20
- Clone the git repo

## Running the backend

### Installation

```
cd backend
mv .env.example .env
npm i
```

### Running

```
npm start
```

### Unit tests

```
npm run unit-test
```

### Integration tests

```
npm run integration-test
```

## Running the frontend

Run the following in a new terminal

### Installation

```
cd frontend
npm i
```

### Running

```
npm run dev
```

### Unit tests

```
npm run unit-test
```

### e2e
Please note that both the frontend and backend need to be running beforehand.

Cypress is installed globally when running this command the first time.

```
npx cypress open
```
