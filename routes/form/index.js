import express from "express";
import formController from "../../controllers/form/index.js";

const router = express.Router();

// POST - CREATE
router.post("/", formController.createOne);

// UPDATE FORMS BY ID
router.patch("/:id/", formController.updateOne); // ✔

// GET FORMS WITH QUERY PARAMETERS(name, type, formStatus, status,  )
router.get("/", formController.findAll); // ✔

// GET PUBLISHED FORM BY FORM TYPE
router.get("/published/type/:formType", formController.findOneByType); // ✔

// GET FORMS BY ID
router.get("/:id", formController.findOne); // ✔

// UPDATE  STATUS
router.patch("/:id/:status", formController.updateStatus); // ✔

// UPDATE FORM STATUS
router.patch("/:id/:formStatus", formController.updateFormStatus); // ✔

// DELETE FORMS 
router.delete("/:id/", formController.deleteOne); // ✔



export default router;
