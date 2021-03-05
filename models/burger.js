const { updateOne } = require('../config/orm.js');
const orm = require('../config/orm.js');

const burger = {
  all(cb) {
    orm.selectAll('burgers', (res) => cb(res));
  },

  create(valOne, valTwo, cb) {
    orm.insertOne('burgers', 'burger_name', 'devoured', valOne, valTwo, (res) => cb(res));
  },

  update(id, valOne, valTwo, cb) {
    orm.updateOne('burgers', 'id', id, 'burger_name', valOne, 'devoured', valTwo, (res) => cb(res));
  },
};

module.exports = burger;