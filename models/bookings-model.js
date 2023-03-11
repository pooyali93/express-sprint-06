const model = {}; 

model.table = `bookings`;
model.mutableFields = ['VEHICLE_ID', 'EMP_ID', 'CUST_ID', 'DATEBOOKED'];
model.idFields = 'BOOKING_ID';


model.buildReadQuery = (id, variant) => {
  let table = `(((((bookings LEFT JOIN vehicles ON bookings.VEHICLE_ID = vehicles.VEHICLE_ID) 
      LEFT JOIN customers ON bookings.CUST_ID = customers.CUST_ID) 
      LEFT JOIN employees AS salesperson ON bookings.EMP_ID = salesperson.EMP_ID)
      LEFT JOIN users uc ON uc.USER_ID = customers.USER_ID)
      LEFT JOIN users ue on ue.USER_ID = salesperson.USER_ID)`;
  let fields = "BOOKING_ID, MAKE, MODEL,COLOUR, MODELYEAR,PRICE, DATEBOOKED, bookings.EMP_ID AS S_ID, CONCAT(ue.FIRSTNAME,' ', ue.LASTNAME) AS Salesperson, bookings.CUST_ID AS C_ID, CONCAT(uc.FIRSTNAME,' ', uc.LASTNAME) AS Customer";
  let sql = `SELECT ${fields} FROM ${table}`;
  let data = {};

  switch(variant) {
    case null:
      // For endpoints without a variant, return the default SQL query without any WHERE clause
      break;
    case "BOOKING_ID":
      // For the booking ID endpoint, add a WHERE clause to filter by booking ID
      sql += " WHERE BOOKING_ID=:ID";
      data = { ID: id };
      break;
    case "EMP_ID":
      // For the salesperson ID endpoint, add a WHERE clause to filter by salesperson ID
      sql += " WHERE bookings.EMP_ID=:ID";
      data = { ID: id };
      break;
    case "CUST_ID":
      // For the customer ID endpoint, add a WHERE clause to filter by customer ID
      sql += " WHERE bookings.CUST_ID=:ID";
      data = { ID: id };
      break;
    default:
      // If the variant is not recognized, return an error message
      throw new Error(`Invalid endpoint variant: ${variant}`);
  }

  return { sql: sql, data: data };
};



export default model;