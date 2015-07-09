

module.exports = {
  connection: 'someMysqlServer',
  tableName: 'junior_manager_table',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true,
      columnName: 'id'
    },
    manager_name: {
      type: 'string',
      columnName: 'manager_name'
    },
    junior_name: {
      type: 'string',
      columnName: 'junior_name'
    },
    promotion: {
      type: 'string',
      columnName: 'promotion'
    },
    created_at: {
    	type: 'datetime',
    	columnName: 'created_at'
    }
  }
};