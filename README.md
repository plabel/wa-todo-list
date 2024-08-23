# SIMPLE TODO LIST

This is a simple todo list but simple can also mean elegant, efficient and dare I say as good as any todo list made by google or apple.
I will deliver that todolist in a timely manner, it will be good, pretty and it will work perfectly.
I'll take inspiration from WA technology's themes and designs.
There will be all kinds of tests, unit, integration and maybe components and e2e.

Here is how I'll do it
- Then maybe
  - integration tests with supertest
  - e2e tests with cypress video demo being a cypress run
  - component tests with cypress
  - custom page title

I'll deliver it with a clean readme and video demo and will try running it again from scratch.

Quality checklist: clear requirements, clear designs, strict mode, linter, prettier, error handling, typing, refactoring, unit tests, manual testing all normal and error paths, git hook, ci pass, cd pass, performance benchmark, monitoring logger pino, test on multiple browsers and mobile browsers.

await (await fetch("http://localhost:3000/tasks/create", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ title: "example", description: "example" }),
})).json();

await (await fetch("http://localhost:3000/tasks/update/2", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ title: "dos", description: "updated" }),
})).json();

await (await fetch("http://localhost:3000/tasks/1", {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
})).json();