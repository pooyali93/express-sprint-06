import joi from 'joi'

const schema = {};



schema.mutableFields = ['RATING', 'MESSAGE','DATE','CUST_ID'];

schema.recordSchema = joi.object({
  RATING: joi.number().integer(),
  MESSAGE: joi.string().min(10),
  DATE: joi.date(),
  CUST_ID: joi.number().integer()
  

}).required();




export default schema;