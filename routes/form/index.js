import express from "express";
import formController from "../../controllers/form/index.js";

import * as validator from "../../validators/form.validator.js";

const {
  expressValidator,
  createFormValidator,
  updateFormStatusValidator,
  updateStatusValidator,
} = validator;

const router = express.Router();

// POST - CREATE
router.post(
  "/",
  createFormValidator(),
  expressValidator,
  formController.createOne
);

// GET FORMS WITH QUERY PARAMETERS(name, type, formStatus, status,  )
router.get("/", formController.findAll); // ✔

// GET PUBLISHED FORM BY FORM TYPE
router.get("/published/type/:formType", formController.findPublishedFormByType); // ✔

// GET FORMS BY ID
router.get("/:id", formController.findOne); // ✔

// UPDATE  STATUS
router.patch(
  "/:id/:status",
  updateStatusValidator(),
  expressValidator,
  formController.updateStatus
); // ✔

// UPDATE FORM STATUS
router.patch(
  "/:id/formstatus/:formStatus",
  updateFormStatusValidator(),
  expressValidator,
  formController.updateFormStatus
); // ✔

// UPDATE FORM BY ID
router.put(
  "/:id/",
  createFormValidator(),
  expressValidator,
  formController.updateOne
); // ✔

// DELETE FORMS
router.delete("/:id/", formController.deleteOne); // ✔

export default router;
