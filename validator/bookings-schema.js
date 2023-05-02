import joi from 'joi'

const schema = {};

schema.mutableFields = ['VEHICLE_ID', 'EMP_ID', 'CUST_ID', 'DATEBOOKED'];

schema.recordSchema = joi.object({
  BOOKING_ID: joi.number().integer(),
  VEHICLE_ID: joi.number().integer(),
  EMP_ID: joi.number().integer(),
  CUST_ID: joi.number().integer(),
  DATEBOOKED: joi.date()

}).required().unknown(true);




export default schema;