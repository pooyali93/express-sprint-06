import { Router } from "express";
import database from "../database.js";
import Model from "../models/Model.js";
import Validator from "../validator/Validator.js";
import Accessor from "../accessor/Accessor.js";
import Controller from "../controller/Controller.js";
import bookingsModel from "../models/bookings-model.js"
import schema from "../validator/users-schema.js";


// Model -----------------------------------
const model = new Model(bookingsModel);

// Validator--------------------------------
const validator = new Validator(schema);

// Data Accessor
const accessor = new Accessor(model, database);



// Controller ----------------------------
const controller = new Controller(validator, accessor);



// Endpoints ---------------------------
const router = Router();

router.get('/', (req, res) => controller.get(req, res, null));
router.get('/:id(\\d+)', (req, res) => controller.get(req, res, 'BOOKING_ID'));
router.get('/salesperson/:id(\\d+)', (req, res) => controller.get(req, res, "EMP_ID"));
router.get('/customers/:id(\\d+)', (req, res) => controller.get(req, res, "CUST_ID"));

router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

export default router;
