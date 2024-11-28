const e = require('express');
const express = require('express');
const router = express.Router();

router.route('/downloads')
.get((req,res)=>{
    res.render('Downloads/ImgDownload');
})

// route to handle the image download
router.route('/downloads/image')
.get((req,res)=>{
    res.download('public/images/tesla.jpg',err=>{
        if(err){
            console.error('Error during download:', err);
            res.status(404).send('File not found');
        }
    }
    );
})

module.exports = router;