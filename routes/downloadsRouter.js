const express = require('express');
const router = express.Router();

router.route('/downloads')
.get((req,res)=>{
    res.render('Downloads/ImgDownload');
    res.download('./public/images/tesla.jpg');
})

module.exports = router;