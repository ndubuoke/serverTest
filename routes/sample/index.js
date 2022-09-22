import express from "express";
import sampleController from "../../controllers/sample/index.js";

const router = express.Router();

// SAMPLE
router.get("/test", sampleController.testHandler);

export default router;
