import joi from 'joi'
const schema = {};



schema.mutableFields = ['VEHICLEURL', 'MAKE', 'MODEL', 'COLOUR', 'MODELYEAR', 'NOOFDOORS', 'PRICE', 'FUELTYPE', 'TRANSMISSION', 'ENGINESIZE', 'MILEAGE'];

schema.recordSchema = joi.object({
  VEHICLEURL: joi.string().uri().allow(null),
  MAKE:joi.string().min(2),
  MODEL: joi.string().min(1),
  COLOUR: joi.string().min(2),
  MODELYEAR: joi.number().integer(),
  NOOFDOORS: joi.string().min(3),
  PRICE: joi.number().integer(),
  FUELTYPE: joi.string().min(5),
  TRANSMISSION: joi.string().min(4),
  ENGINESIZE: joi.string().min(3),
  MILEAGE: joi.number().integer(),
}).required();


export default schema;