import { Router } from "express";
import database from "../database.js";
import Model from "../models/Model.js";
import Validator from "../validator/Validator.js";
import Accessor from "../accessor/Accessor.js";
import Controller from "../controller/Controller.js";
import usersModel from '../models/users-model.js';
import schema from "../validator/users-schema.js";

// Model -----------------------------------
const model = new Model(usersModel);

// Validator--------------------------------
const validator = new Validator(schema);

// Data Accessor
const accessor = new Accessor(model, database);



// Controller ----------------------------
const controller = new Controller(validator, accessor);

// Endpoints ----------------------------
const router = Router();

router.get('/', (req, res) => controller.get(req, res, null));	
router.get('/:id(\\d+)', (req, res) => controller.get(req, res, "USER_ID"));
router.get('/customers', (req, res) => controller.get(req, res, "customers"))
router.get('/employees', (req, res) => controller.get(req, res, "employees"));
router.get('/sales', (req, res) => controller.get(req, res, "sales"));
router.get('/managers', (req, res) => controller.get(req, res, "managers"));

router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

export default router;
