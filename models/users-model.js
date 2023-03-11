const model = {}; 

model.table = `users`;
model.mutableFields = ['FIRSTNAME', 'LASTNAME', 'STREET', 'CITY', 'POSTCODE', 'EMAIL', 'PHONENO'];
model.idFields = 'USER_ID';

model.buildReadQuery = (id, variant) => {
  let table = '';
  switch (variant) {
    case 'sales':
      table = "employees inner join users on employees.USER_ID = users.USER_ID Where JOBTITLE = 'Salesperson'";
      break;
    case 'employees':
      table = "employees inner join users on employees.USER_ID = users.USER_ID";
      break;
    case 'managers':
      table = "employees inner join users on employees.USER_ID = users.USER_ID Where JOBTITLE = 'Manager'";
      break;
    case 'customers':
      table = "customers inner join users on customers.USER_ID = users.USER_ID";
      break;
    default:
      table = 'users';
  }

  let fields = ["users.USER_ID, FIRSTNAME, LASTNAME, STREET, CITY, POSTCODE, EMAIL, PHONENO"];
  let sql = `SELECT ${fields} FROM ${table}`;

  if (id) sql += `  WHERE users.USER_ID =:ID`;
  return { sql: sql, data: { ID: id }};
};

export default model;