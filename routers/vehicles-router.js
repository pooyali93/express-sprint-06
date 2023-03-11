import { Router } from "express";
import Model from "../models/Model.js";
import vehiclesModel from '../models/vehicles-model.js';
import database from "../database.js";
import Accessor from "../accessor/Accessor.js";
import schema from "../validator/vehicles-schema.js";
import Controller from "../controller/Controller.js";
import Validator from "../validator/Validator.js";


// Validator--------------------------------
const validator = new Validator(schema);

// Model -----------------------------------
const model = new Model(vehiclesModel);


// Data accessors -------------------------
const accessor = new Accessor(model, database);

// Controller ----------------------------
const controller = new Controller(validator,accessor);

// Endpoints ---------------------------
const router = Router();

router.get('/', (req, res) => controller.get(req, res, null));
router.get('/:id(\\d+)', (req, res) => controller.get(req, res, "VEHICLE_ID"));
router.get('/make=:make', (req, res) => controller.get(req, res, "make"));
router.get('/model=:model', (req, res) => controller.get(req, res, "model"));



router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);


export default router;
