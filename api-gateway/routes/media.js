const express = require('express');
const router = express.Router();
const handlerMedia = require('./handler/media')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('media');
});

router.post('/',handlerMedia.create)
module.exports = router;
