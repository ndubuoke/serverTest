import express from "express";
import formBehavioursDataController from "../../controllers/form-behaviours-data/index.js";

const router = express.Router();

// POST - CREATE
router.post("/", formBehavioursDataController.createOrUpdate);

// GET ALL FORM BEHAVIOURS DATA
router.get("/", formBehavioursDataController.find); //

export default router;
