import request from "supertest";
import { Express } from "express";
import { Server } from "http";
import { serverTuple } from "../app";

let app: Express;
let server: Server;

beforeAll(async () => {
    [app, server] = serverTuple;
});

describe("/tasks/", () => {
    test(`
      Given we call /tasks/
      Then it returns the tasks
    `, async () => {
        await request(app)
            .get("/tasks/")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200);
    });
});


afterAll(() => {
    server.close();
});