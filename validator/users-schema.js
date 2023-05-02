import joi from 'joi'

const schema = {};

schema.mutableFields = ['FIRSTNAME', 'LASTNAME', 'STREET', 'CITY', 'POSTCODE', 'EMAIL', 'PHONENO'];
schema.recordSchema = joi.object({
  FIRSTNAME: joi.string().min(1),
  LASTNAME:joi.string().min(2),
  STREET: joi.string().min(8),
  CITY: joi.string().min(4),
  POSTCODE: joi.string().regex(/^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))[0-9][A-Za-z]{2})$/, 'postcode'),
  EMAIL: joi.string().regex(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, ' email'),
  PHONENO: joi.string().regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, 'phone')
}).required().unknown(true);

export default schema;