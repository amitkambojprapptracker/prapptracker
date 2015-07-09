

module.exports = {
  connection: 'someMysqlServer',
  tableName: 'junior_senior_table;',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true,
      columnName: 'id'
    },
    senior_name: {
      type: 'string',
      columnName: 'senior_name'
    },
    junior_name: {
      type: 'string',
      columnName: 'junior_name'
    },
    task_id: {
      type: 'integer',
      columnName: 'task_id'
    },
    rating: {
      type: 'integer',
      columnName: 'rating'
    },
    created_at: {
      type: 'datetime',
      columnName: 'created_at'
    }
  }
};