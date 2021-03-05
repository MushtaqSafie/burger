const connection = require('./connection');

const orm = {
  selectAll(tableName, cb) {
    connection.query('SELECT * FROM ??;', [tableName], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne(tableName, fieldOne, fieldTwo, valueOne, valueTwo, cb) {
    connection.query('INSERT INTO ?? ( ?? , ?? ) VALUES (?, ?)', [tableName, fieldOne, fieldTwo, valueOne, valueTwo], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne(tableName, fieldID, valueID, fieldOne, valueOne, fieldTwo, valueTwo, cb) {
    connection.query('UPDATE ?? SET ?? = ?, ?? = ? WHERE ?? = ?', [tableName, fieldOne, valueOne, fieldTwo, valueTwo, fieldID, valueID], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
};

module.exports = orm;



