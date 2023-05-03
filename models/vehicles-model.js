const model = {}; 

model.table = `vehicles`;
model.mutableFields = [ 'VEHICLEURL', 'MAKE', 'MODEL','VEHICLEDESC', 'COLOUR', 'MODELYEAR', 'NOOFDOORS', 'PRICE', 'FUELTYPE', 'TRANSMISSION', 'ENGINESIZE', 'MILEAGE'];
model.idFields = 'VEHICLE_ID';

model.buildReadQuery = (id) => {
  let table = 'vehicles';
  let fields = ['VEHICLE_ID', 'VEHICLEURL', 'MAKE', 'MODEL','VEHICLEDESC','COLOUR', 'MODELYEAR', 'NOOFDOORS', 'PRICE', 'FUELTYPE', 'TRANSMISSION', 'ENGINESIZE', 'MILEAGE'];
  let sql = `SELECT ${fields} FROM ${table}`;
  if (id) sql += ` WHERE ${model.idFields}=:ID`;
  return { sql: sql, data: { ID: id } };
};
export default model;