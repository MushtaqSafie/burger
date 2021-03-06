const express = require('express');;
const burger = require('../models/burger.js');

const router = express.Router();

router.get('/', (req, res) => {
  burger.all((data) => {
    const obj = { burger: data };
    console.log('obj', obj);
    res.render('index', { burger: data })
  });
});

router.post('/api/burger', (req, res) => {
  burger.create(req.body.name, req.body.devoured, (result) => {
    res.json({ id: result.insertId });
  });
});

router.put('/api/burger/:id', (req, res) => {
  burger.update(req.params.id, req.body.devoured, (result) => {
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports  = router