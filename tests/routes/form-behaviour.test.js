import mongoose from "mongoose";
import supertest from "supertest";
import app from "../../app";
import {removeAllCollections} from "../helper";

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

let formBehaviourId;

test("POST /v1/form-behaviour", async () => {
    const data = {
      name: "Show/Hide Field, Section or Page",
      info: "Change visibility of field(s) depending on `IF` State conditions.",
      config: {
        conditions: [
          {
            field: "if",
            render: "select"
          },
          {
            field: "state",
            render: "select"
          },
          {
            field: "value",
            render: "select"
          }
        ],
        actions: [
          {
            type: "do",
            render: "select"
          },
          {
            type: "form member",
            render: "select"
          }
        ]
      },
      lastModifiedById:"445",
      lastModifiedBy:"Samuel",
      createdById:"5567",
      createdBy:"Samuel"
    }
    await supertest(app)
      .post("/v1/form-behaviour")
      .send(data)
      .expect(200)
      .then((response) => {
        formBehaviourId = response.body.data._id;
        expect(response.body.status).toEqual("success");
        expect(response.body.message).toEqual(
          "Form behaviour created successfully"
        );
      });
  });

test("GET /v1/form-behaviour", async () => {
  await supertest(app)
    .get("/v1/form-behaviour")
    .expect(200)
    .then((response) => {
      expect(response.body.status).toEqual("success");
      expect(response.body.message).toEqual(
        "Form behaviour fetched successfully"
      );
    });
});

test("GET/v1/form-behaviour/:id", async () => {
  await supertest(app)
    .get(`/v1/form-behaviour/${formBehaviourId}`)
    .expect(200)
    .then((response) => {
      expect(response.body.status).toEqual("success");
      expect(response.body.message).toEqual("Form behaviour fetched successfully");
    });
});

test("GET /v1/form-behaviour/status/status", async () => {
  const status = 'active';
  await supertest(app)
    .get(`/v1/form-behaviour/status/${status}`)
    .expect(200)
    .then((response) => {
      expect(response.body.status).toEqual("success");
      expect(response.body.message).toEqual(
        "Form behaviour fetched successfully"
      );
    });
});

test("PUT /v1/form-behaviour/id", async () => {
  const data = {
    name: "Show/Hide Field, Section or Page",
    info: "Change visibility of field(s) depending on `IF` State conditions.",
    config: {
      conditions: [
        {
          field: "if",
          render: "select"
        },
        {
          field: "state",
          render: "select"
        },
        {
          field: "value",
          render: "select"
        }
      ],
      actions: [
        {
          type: "do",
          render: "select"
        },
        {
          type: "form member",
          render: "select"
        }
      ]
    },
    lastModifiedById:"445",
    lastModifiedBy:"Samuel",
    createdById:"5567",
    createdBy:"Samuel"
  }
  await supertest(app)
    .put(`/v1/form-behaviour/${formBehaviourId}`)
    .send(data)
    .expect(200)
    .then((response) => {
      expect(response.body.status).toEqual("success");
      expect(response.body.message).toEqual(
        "Form behaviour updated successfully"
      );
    });
})

test("PATCH /v1/form-behaviour/id/status", async () => {
  const status = 'active';
  await supertest(app)
    .patch(`/v1/form-behaviour/${formBehaviourId}/${status}`)
    .expect(200)
    .then((response) => {
      expect(response.body.status).toEqual("success");
      expect(response.body.message).toEqual(
        "Form behaviour updated successfully"
      );
    });
})

test("DELETE /v1/form-behaviour/id", async () => {
  await supertest(app)
    .delete(`/v1/form-behaviour/${formBehaviourId}`)
    .expect(200)
    .then((response) => {
      expect(response.body.status).toEqual("success");
      expect(response.body.message).toEqual(
        "Form behaviour deleted successfully"
      );
    });
});