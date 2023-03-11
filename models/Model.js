class Model {
  constructor(model){
    this.table = model.table;
    this.mutableFields = model.mutableFields;
    this.idFields = model.idFields;
    this.buildReadQuery = model.buildReadQuery;

  }
  // Methods

buildSetFields = (fields) => fields.reduce((setSQL, field, index) =>
  setSQL + `${field}=:${field} ` + ((index === fields.length - 1) ? '' : ', '), 'SET ');

buildCreateQuery = (record) => {
  const sql = `INSERT INTO ${this.table} ` + this.buildSetFields(this.mutableFields);
	return { sql, data:record }
};


buildUpdateQuery = (record, id) => {
  const allowedRecordFields = this.mutableFields.filter((field) => record.hasOwnProperty(field));
  const sql = `UPDATE ${this.table} ` + this.buildSetFields(allowedRecordFields) + ` WHERE ${this.idFields}=:${this.idFields} `;
  return { sql, data: { ...record, [this.idFields]: id } }
};

 buildDeleteQuery = (id) => {
  const sql = `DELETE FROM ${this.table} WHERE ${this.idFields}=:${this.idFields}`;
  return { sql, data: { [this.idFields]: id } }
};
}

export default Model;