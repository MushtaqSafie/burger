const connection = require('./connection');

const orm = {
  selectAll(tableName) {
    connection.query('SELECT * FROM ??;', [tableName], (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne(burger_name, devoured) {
    connection.query('INSERT INTO burgers(burger_name, devoured) VALUES (?, ?)', [burger_name, devoured], (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne(fieldID, burger_name, devoured) {
    connection.query('UPDATE burgers SET burger_name = ?, devoured = ? WHERE id = ?', [burger_name, devoured, fieldID], (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  },
};

module.exports = orm;



