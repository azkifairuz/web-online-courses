const express = require('express');
const router = express.Router();
const isBase64 = require("is-base64")
router.post('/',(req,res)=>{
  const image = req.body.image;

  if (!isBase64(image, {mimeRequired:true})) {
    return res.status(400).json({
      status:"error",
      massage:"invalid image type"
    })
  }
  return res.send('ok')

})

module.exports = router;
