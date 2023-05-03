import { Router } from "express";
import database from "../database.js";
import Model from "../models/Model.js";
import Validator from "../validator/Validator.js";
import Accessor from "../accessor/Accessor.js";
import Controller from "../controller/Controller.js";
import feedbackModel from '../models/feedbacks-model.js';
import schema from "../validator/feedbacks-schema.js";

// Validator--------------------------------
const validator = new Validator(schema);

// Model -----------------------------------
const model = new Model(feedbackModel);

// Data accessors -------------------------
const accessor = new Accessor(model, database);

// Controller ----------------------------
const controller = new Controller(validator,accessor);

// Endpoints ---------------------------
const router = Router();

router.get('/', (req, res) => controller.get(req, res, null));
router.get('/:id(\\d+)', (req, res) => controller.get(req, res, null));


router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);


export default router;
