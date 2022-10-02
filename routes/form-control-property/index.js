import express from "express";
import formControlPropertyController from "../../controllers/form-control-property/index.js";

const router = express.Router();

// POST - CREATE PROPERTY
router.post("/", formControlPropertyController.createOne);

// GET ALL PROPERTIES
router.get("/", formControlPropertyController.findAll); // ✔

// GET PROPERTY BY NAME
router.get("/name/:name", formControlPropertyController.findOneByName); // ✔

// GET PROPERTY BY ID
router.get("/:id", formControlPropertyController.findOne); // ✔

// UPDATE PROPERTY STATUS
router.patch(
  "/:id/:status",
  formControlPropertyController.updatePropertyStatus
); // ✔

// UPDATE PROPERTY BY ID
router.patch("/:id/", formControlPropertyController.updateOne); // ✔

// DELETE PROPERTY
router.delete("/:id/", formControlPropertyController.deleteOne); // ✔

// SEED PROPERTIES
router.post("/seed", formControlPropertyController.bulkCreate); // ✔

export default router;
