import express from "express";
import formBehaviourController from "../../controllers/form-behaviour/index.js";

import * as validator from '../../validators/form-behaviour.validator.js';

const { expressValidator, createFormBehaviourValidator, updateStatusValidator } = validator;

const router = express.Router();

// POST - CREATE
router.post("/", createFormBehaviourValidator(), expressValidator, formBehaviourController.createOne);

// GET FORM BEHAVIOUR WITH QUERY PARAMETERS(name, info, status,  )
router.get("/", formBehaviourController.findAll); // ✔

// GET FORMS BY ID
router.get("/:id", formBehaviourController.findOne); // ✔

// UPDATE  STATUS
router.patch("/:id/:status",  updateStatusValidator(), expressValidator, formBehaviourController.updateStatus); // ✔

// UPDATE FORM BY ID
router.put("/:id/",  createFormBehaviourValidator(), expressValidator, formBehaviourController.updateOne); // ✔

// DELETE FORMS 
router.delete("/:id/", formBehaviourController.deleteOne); // ✔

// GET FORM BEHAVIOURS BY STATUS
router.get("/status/:status", formBehaviourController.findByStatus); // ✔



export default router;
