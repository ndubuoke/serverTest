import mongoose from "mongoose";
import supertest from "supertest";
import app from "../app";
import removeAllCollections from "./helper";

// This file contains test for index routes

beforeEach((done) => {
  mongoose.connect(
    process.env.MONGO_TEST_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => done()
  );
});

test("GET /", async () => {
  await supertest(app)
    .get("/")
    .expect(200)
    .then((response) => {
      expect(response.body.status).toEqual("success");
      expect(response.body.message).toEqual("Ok 👍");
    });
});
