import mongoose from "mongoose";
import supertest from "supertest";
import app from "../../app";
import removeAllCollections from "../helper";

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

test("GET /v1/form-behaviours-data", async () => {
  await supertest(app)
    .get("/v1/form-behaviours-data")
    .expect(200)
    .then((response) => {
      expect(response.body.status).toEqual("success");
      expect(response.body.message).toEqual(
        "Form controls behaviours data fetched successfully"
      );
    });
});
test("POST /v1/form-behaviours-data", async () => {
  const data = {
    formType: "sampleformtype",
    behaviours: [
      {
        config: {
          actions: [],
          conditions: [],
          name: "sample name",
          info: "sample info4",
        },
        condition: {
          if: "if",
          state: "is equal to",
          value: "date_of_birth",
        },
        actions: [
          {
            type: "Field",
            option: "",
            formMember: "",
            formMemberValue: "",
            to: "11/10/2022",
          },
          {
            type: "Section",
            option: "",
            formMember: "",
            formMemberValue: "",
            to: "",
          },
        ],
      },
    ],
  };
  await supertest(app)
    .post("/v1/form-behaviours-data")
    .send(data)
    .expect(200)
    .then((response) => {
      expect(response.body.status).toEqual("success");
      expect(response.body.message).toEqual(
        "Form control updated successfully"
      );
    });
});
test("POST /v1/form-behaviours-data", async () => {
  const data = {
    behaviours: [
      {
        config: {
          actions: [],
          conditions: [],
          name: "sample name",
          info: "sample info4",
        },
        condition: {
          if: "if",
          state: "is equal to",
          value: "date_of_birth",
        },
        actions: [
          {
            type: "Field",
            option: "",
            formMember: "",
            formMemberValue: "",
            to: "11/10/2022",
          },
          {
            type: "Section",
            option: "",
            formMember: "",
            formMemberValue: "",
            to: "",
          },
        ],
      },
    ],
  };
  await supertest(app)
    .post("/v1/form-behaviours-data")
    .send(data)
    .expect(400)
    .then((response) => {
      expect(response.body.status).toEqual("error");
      expect(response.body.error.message).toEqual("Please add a form type");
    });
});
test("POST /v1/form-behaviours-data", async () => {
  const data = {
    formType: "sampleformtype",
  };
  await supertest(app)
    .post("/v1/form-behaviours-data")
    .send(data)
    .expect(400)
    .then((response) => {
      expect(response.body.status).toEqual("error");
      expect(response.body.error.message).toEqual(
        "Please add a form behaviours data"
      );
    });
});
