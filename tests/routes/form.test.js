import mongoose from "mongoose";
import supertest from "supertest";
import app from "../../app";
import {removeAllCollections, createFormBodyParameters} from "../helper";

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

<<<<<<< HEAD
let formId;
=======
>>>>>>> 695d93c (update)
test("GET /v1/form gets forms with query parameter", async () => {
  await supertest(app)
    .get("/v1/form")
    .expect(200)
    .then((response) => {
      expect(response.body.status).toEqual("success");
      expect(response.body.message).toEqual(
        "Forms fetched successfully"
      );
    });
});

test("POST /v1/form with correct body parameter", async () => {
  const data = await createFormBodyParameters()
<<<<<<< HEAD
  console.log(data.dataCorrect)
=======
>>>>>>> 695d93c (update)
  await supertest(app)
    .post("/v1/form")
    .send(data.dataCorrect)
    .expect(200)
    .then((response) => {
<<<<<<< HEAD
      console.log("formId")
      formId = response.body.data._id;
      console.log(formId)
=======
>>>>>>> 695d93c (update)
      expect(response.body.status).toEqual("success");
      expect(response.body.message).toEqual(
        "Form created successfully"
      );
    });
});
test("POST /v1/form with incomplete body parameter", async () => {
  const data = await createFormBodyParameters()
  await supertest(app)
    .post("/v1/form")
    .send(data.dataNoPages)
    .expect(400)
    .then((response) => {
      expect(response.body.status).toEqual(400);
      expect(response.body.message).toEqual( "Bad Request");
      expect(response.body.data.errors[0].msg).toEqual("formType cannot be empty");
      expect(response.body.data.errors[0].param).toEqual("formType");
      expect(response.body.data.errors[0].location).toEqual("body");
      expect(response.body.data.errors[1].msg).toEqual("formType must be a string");
      expect(response.body.data.errors[1].param).toEqual("formType");
      expect(response.body.data.errors[1].location).toEqual("body");
      expect(response.body.data.errors[2].msg).toEqual("formType does not contain a valid value");
      expect(response.body.data.errors[2].param).toEqual("formType");
      expect(response.body.data.errors[2].location).toEqual("body");
      expect(response.body.data.errors[3].msg).toEqual("Page is required");
      expect(response.body.data.errors[3].param).toEqual("builtFormMetadata.pages");
      expect(response.body.data.errors[3].location).toEqual("body");
    });
});
test("POST /v1/form with already existed formType", async () => {
  const data = await createFormBodyParameters()
  await supertest(app)
    .post("/v1/form")
    .send(data.dataCorrect)
    .expect(400)
    .then((response) => {
      expect(response.body.status).toEqual("success");
      expect(response.body.error.message).toEqual(
        "Form type already exist, please fetch the published one and update"
      );
    });
});

test("GET /v1/form/published/type/smeLegacy gets the published form for a particular form type", async () => {
    await supertest(app)
      .get("/v1/form/published/type/smeLegacy")
      .expect(200)
      .then((response) => {
        expect(response.body.status).toEqual("success");
        expect(response.body.message).toEqual(
          "Form fetched successfully"
        );
      });
});
test("GET /v1/form/published/type/smeLegacyyy gets a published form with wrong form type", async () => {
    await supertest(app)
      .get("/v1/form/published/type/smeLegacy")
      .expect(404)
      .then((response) => {
        expect(response.body.status).toEqual("success");
        expect(response.body.message).toEqual(
          "Form not available at the moment. Check back later"
        );
      });
});

test("GET /v1/form/{formId} gets a single form by form id", async () => {
<<<<<<< HEAD
  console.log(formId)
        await supertest(app)
        .get(`/v1/form/${formId}`)
=======
await supertest(app)
    .get("/v1/form")
    .expect(200)
    .then( async (response) => {
        await supertest(app)
        .get(`/v1/form${response.body.data[0]._id}`)
>>>>>>> 695d93c (update)
        .expect(200)
        .then((response) => {
            expect(response.body.status).toEqual("success");
            expect(response.body.message).toEqual(
            "Form fetched successfully"
            );
        });
<<<<<<< HEAD
    
});
test("GET /v1/form/{formId} gets a single form with wrong form id", async () => {
  console.log(formId)
=======
    });
});
test("GET /v1/form/{formId} gets a single form with wrong form id", async () => {
>>>>>>> 695d93c (update)
await supertest(app)
    .get("/v1/form/63443d8602dac8e847fc80c6")
    .expect(404)
    .then((response) => {
    expect(response.body.status).toEqual("success");
    expect(response.body.message).toEqual(
        "Form not found"
    );
    });
});

test("PATCH /v1/form/{formId} update form status", async () => {
<<<<<<< HEAD
    console.log(formId)
        await supertest(app)
        .patch(`/v1/form/${formId}/formstatus/published`)
=======
await supertest(app)
    .get("/v1/form")
    .expect(200)
    .then( async (response) => {
        await supertest(app)
        .patch(`/v1/form${response.body.data[0]._id}/formstatus/published`)
>>>>>>> 695d93c (update)
        .expect(200)
        .then((response) => {
            expect(response.body.status).toEqual("success");
            expect(response.body.message).toEqual(
            "Form updated successfully"
            );
        });
<<<<<<< HEAD
    
});
test("PATCH /v1/form/{formId} update form status with invalid value", async () => {

        await supertest(app)
        .patch(`/v1/form/${formId}/formstatus/publishedddd`)
=======
    });
});
test("PATCH /v1/form/{formId} update form status with invalid value", async () => {
await supertest(app)
    .get("/v1/form")
    .expect(200)
    .then( async (response) => {
        await supertest(app)
        .patch(`/v1/form${response.body.data[0]._id}/formstatus/publishedddd`)
>>>>>>> 695d93c (update)
        .expect(400)
        .then((response) => {
            expect(response.body.status).toEqual("success");
            expect(response.body.message).toEqual(
            "Bad Request"
            );
            expect(response.body.data.errors[0].msg).toEqual("formStatus does not contain a valid value");
            expect(response.body.data.errors[0].param).toEqual("formStatus");
            expect(response.body.data.errors[0].location).toEqual("params");
        });
<<<<<<< HEAD
  
=======
    });
>>>>>>> 695d93c (update)
});

test("PUT /v1/form  update full form with correct body parameter", async () => {
    const data = await createFormBodyParameters()
<<<<<<< HEAD
        await supertest(app)
            .put(`/v1/form/${formId}`)
=======
    .get("/v1/form")
    .expect(200)
    .then( async (response) => {
        await supertest(app)
            .put(`/v1/form${response.body.data[0]._id}`)
>>>>>>> 695d93c (update)
            .send(data.dataCorrect)
            .expect(200)
            .then((response) => {
                expect(response.body.status).toEqual("success");
                expect(response.body.message).toEqual(
                "Form updated successfully"
            );
        });
<<<<<<< HEAD
 
  });
test("PUT /v1/form  update full form with incomplete body parameter", async () => {
    const data = await createFormBodyParameters()
        await supertest(app)
        .put(`/v1/form/${formId}`)
=======
    });
  });
test("PUT /v1/form  update full form with incomplete body parameter", async () => {
    const data = await createFormBodyParameters()
    .get("/v1/form")
    .expect(200)
    .then( async (response) => {
        await supertest(app)
        .post(`/v1/form${response.body.data[0]._id}`)
>>>>>>> 695d93c (update)
        .send(data.dataNoPages)
        .expect(400)
        .then((response) => {
          expect(response.body.status).toEqual(400);
          expect(response.body.message).toEqual( "Bad Request");
          expect(response.body.data.errors[0].msg).toEqual("formType cannot be empty");
          expect(response.body.data.errors[0].param).toEqual("formType");
          expect(response.body.data.errors[0].location).toEqual("body");
          expect(response.body.data.errors[1].msg).toEqual("formType must be a string");
          expect(response.body.data.errors[1].param).toEqual("formType");
          expect(response.body.data.errors[1].location).toEqual("body");
          expect(response.body.data.errors[2].msg).toEqual("formType does not contain a valid value");
          expect(response.body.data.errors[2].param).toEqual("formType");
          expect(response.body.data.errors[2].location).toEqual("body");
          expect(response.body.data.errors[3].msg).toEqual("Page is required");
          expect(response.body.data.errors[3].param).toEqual("builtFormMetadata.pages");
          expect(response.body.data.errors[3].location).toEqual("body");
        });
<<<<<<< HEAD
=======
    });
>>>>>>> 695d93c (update)
});
 
test("GET /v1/form gets all form types", async () => {
    await supertest(app)
      .get("/v1/form/types/all")
      .expect(200)
      .then((response) => {
        expect(response.body.status).toEqual("success");
        expect(response.body.message).toEqual(
          "Form types fetched successfully"
        );
      });
});
  