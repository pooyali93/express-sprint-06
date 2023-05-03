const model = {};
model.table = `bookings`;
model.mutableFields = ['VEHICLE_ID', 'EMP_ID', 'CUST_ID', 'DATEBOOKED'];
model.idFields = 'BOOKING_ID';
model.buildReadQuery = (id, variant) => {
  const resolvedTable = `(((((bookings LEFT JOIN vehicles ON bookings.VEHICLE_ID = vehicles.VEHICLE_ID) 
                          LEFT JOIN customers ON bookings.CUST_ID = customers.CUST_ID) 
                          LEFT JOIN employees AS salesperson ON bookings.EMP_ID = salesperson.EMP_ID)
                          LEFT JOIN users uc ON uc.USER_ID = customers.USER_ID)
                          LEFT JOIN users ue on ue.USER_ID = salesperson.USER_ID)`;
  let fields = [`BOOKING_ID,bookings.VEHICLE_ID, BOOKING_ID, MAKE, MODEL,VEHICLEDESC,COLOUR, MODELYEAR,PRICE, DATEBOOKED, bookings.EMP_ID AS Sales_ID, CONCAT(ue.FIRSTNAME,' ', ue.LASTNAME) AS Salesperson, bookings.CUST_ID AS Customer_ID, CONCAT(uc.FIRSTNAME,' ', uc.LASTNAME) AS Customer`]
  let sql = '';
  switch (variant) {
    case "EMP_ID":
      sql += `SELECT ${fields} FROM ${resolvedTable} WHERE bookings.EMP_ID=:ID`;
      break;
    case "CUST_ID":
      sql += `SELECT ${fields} FROM ${resolvedTable} WHERE bookings.CUST_ID=:ID`;
      break;
    default:
      sql = `SELECT ${fields} FROM ${resolvedTable}`;
      if (id) sql += ` WHERE BOOKING_ID=:ID`;
  }
  return { sql, data: { ID: id } };
};
export default model;