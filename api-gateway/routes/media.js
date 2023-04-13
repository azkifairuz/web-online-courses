const express = require('express');
const router = express.Router();
const handlerMedia = require('./handler/media')

/* GET users listing. */
router.get('/', handlerMedia.getAll);

router.post('/',handlerMedia.create)
module.exports = router;
