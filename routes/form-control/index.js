import express from "express";
import formControlController from "../../controllers/form-control/index.js";

const router = express.Router();

// POST - CREATE
router.post("/", formControlController.createOne);

// GET ALL CONTROLS
router.get("/", formControlController.findAll); // ✔

// GET CONTROL BY NAME
router.get("/name/:name", formControlController.findOneByName); // ✔

// GET CONTROL BY ID
router.get("/:id", formControlController.findOne); // ✔

// UPDATE CONTROL STATUS
router.patch("/:id/:status", formControlController.updateStatus); // ✔

// UPDATE CONTROL BY ID
router.patch("/:id/", formControlController.updateOne); // ✔

// DELETE CONTROL STATUS
router.delete("/:id/", formControlController.deleteOne); // ✔

// SEED CONTROLS
router.post("/seed", formControlController.bulkCreate); // ✔

export default router;
