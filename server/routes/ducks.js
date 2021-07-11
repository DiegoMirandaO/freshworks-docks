var express = require('express');
var router = express.Router();
const db = require('./querys')

router.get('/', db.getDuckFeds)
router.get('/:id', db.getDuckFedById)
router.post('/', db.createDuckFed)
// router.put('/:id', db.updateDuckFed)
router.delete('/:id', db.deleteDuckFed)

module.exports = router;
