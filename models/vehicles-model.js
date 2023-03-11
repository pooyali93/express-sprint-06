const model = {}; 

model.table = `vehicles`;
model.mutableFields = ['VEHICLE_ID', 'VEHICLEURL', 'MAKE', 'MODEL', 'COLOUR', 'MODELYEAR', 'NOOFDOORS', 'PRICE', 'FUELTYPE', 'TRANSMISSION', 'ENGINESIZE', 'MILEAGE'];
model.idFields = 'VEHICLE_ID';

model.buildReadQuery = (id) => {
  let table = 'vehicles';
  let sql = `SELECT ${model.mutableFields} FROM ${table}`;
  if (id) sql += ` WHERE ${model.idFields}=:ID`;
  return { sql: sql, data: { ID: id } };
};

  export default model;