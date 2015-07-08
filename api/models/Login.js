

module.exports = {
  connection: 'someMysqlServer',
  tableName: 'users',
  attributes: {
    id: {
      type: 'integer',
      unique: true,
      primaryKey: true,
      columnName: 'id'
    },
    name: {
      type: 'string',
      columnName: 'name'
    },
    password: {
      type: 'string',
      columnName: 'password'
    },
    rank: {
      type: 'string',
      columnName: 'rank'
    },
    created_at: {
    	type: 'datetime',
    	columnName: 'created_at'
    }
  }
};