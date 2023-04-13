const express = require('express');
const router = express.Router();
const handlerMedia = require('./handler/media')

/* GET users listing. */
router.get('/', handlerMedia.getAll);

router.post('/',handlerMedia.create)
router.delete('/:id',handlerMedia.destroy)
module.exports = router;
