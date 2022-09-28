import mongoose from "mongoose";
import supertest from "supertest";
import app from "../../app";
import removeAllCollections from "../helper";

// This file contains tests for all sample routes

beforeEach((done) => {
  mongoose.connect(
    process.env.MONGO_TEST_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => done()
  );
});

afterEach(async () => {
  await removeAllCollections();
});

test("GET /v1/sample/test", async () => {
  await supertest(app)
    .get("/v1/sample/test")
    .expect(200)
    .then((response) => {
      expect(response.body.data).toEqual("Hey! This is a test service!");
      expect(response.body.message).toEqual("Sample Route Working");
    });
});
