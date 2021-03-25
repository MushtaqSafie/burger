const orm = require('../config/orm.js');

const burger = {
  all(cb) {
    orm.selectAll('burgers', (res) => cb(res));
  },

  create(valOne, valTwo, cb) {
    orm.insertOne('burgers', 'burger_name', 'devoured', valOne, valTwo, (res) => cb(res));
  },

  update(id, valOne, cb) {
    orm.updateOne('burgers', 'id', id, 'devoured', valOne, (res) => cb(res));
  },

  delete(id, cb) {
    orm.deleteOne('burgers', 'id', id, (res) => cb(res));
  }
  all(cb) {
    orm.selectAll('burgers', (res) => cb(res));
  },

  create(valOne, valTwo, cb) {
    orm.insertOne('burgers', 'burger_name', 'devoured', valOne, valTwo, (res) => cb(res));
  },

  update(id, valOne, cb) {
    orm.updateOne('burgers', 'id', id, 'devoured', valOne, (res) => cb(res));
  },

  delete(id, cb) {
    orm.deleteOne('burgers', 'id', id, (res) => cb(res));
  }
};

module.exports = burger;