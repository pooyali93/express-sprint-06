const model = {}; 

model.table = `feedbacks`;
model.mutableFields = ['RATING', 'MESSAGE', 'DATE', 'CUST_ID'];
model.idFields = 'FEEDBACK_ID';

model.buildReadQuery = (id) => {
  const resolvedTable = '((feedbacks LEFT JOIN customers ON feedbacks.CUST_ID = customers.CUST_ID) LEFT JOIN users ON users.USER_ID = customers.USER_ID)';
  let fields = [ 'FEEDBACK_ID','RATING', 'MESSAGE','DATE' , 'feedbacks.CUST_ID',
                  'CONCAT(users.FIRSTNAME, " ", users.LASTNAME) AS FULLNAME'
  ];

  let sql = `SELECT ${fields} FROM ${resolvedTable}`;
  if (id) sql += ` WHERE FEEDBACK_ID=:ID`;
  return { sql: sql, data: { ID: id } };
};


  export default model;