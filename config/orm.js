const connection = require('./connection');

const orm = {
  selectAll(tableName) {
    connection.query('SELECT * FROM ??;', [tableName], (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne(tableName, fieldOne, fieldTwo, valueOne, valueTwo) {
    connection.query('INSERT INTO ?? ( ?? , ?? ) VALUES (?, ?)', [tableName, fieldOne, fieldTwo, valueOne, valueTwo], (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne(tableName, fieldID, valueID, fieldOne, valueOne, fieldTwo, valueTwo) {
    connection.query('UPDATE ?? SET ?? = ?, ?? = ? WHERE ?? = ?', [tableName, fieldOne, valueOne, fieldTwo, valueTwo, fieldID, valueID], (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  },
};

module.exports = orm;



