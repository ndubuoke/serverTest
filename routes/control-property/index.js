import express from "express";
import controlPropertyController from "../../controllers/control-property/index.js";

const router = express.Router();

// POST - CREATE PROPERTY
router.post("/control-property", controlPropertyController.createOne);

// GET ALL PROPERTIES
router.get("/control-property", controlPropertyController.findAll);

// GET PROPERTY
router.get("/control-property/:id", controlPropertyController.findOne);

// UPDATE PROPERTY STATUS
router.patch(
  "/control-property/:id/:status",
  controlPropertyController.updatePropertyStatus
);

// SEED PROPERTIES
router.get("/control-property/seed", controlPropertyController.bulkCreate);

// DELETE PROPERTY STATUS
router.delete("/control-property/:id/", controlPropertyController.deleteOne);

export default router;
