var express = require('express');
var router  = express.Router();
var countries = require('../models/schema')
/* GET METHOD */
router.get('/countries',function (req,res,next){
    var query = req.query;
    countries.find(query ,{_id: 0}).then((result) => {
        res.json(result);
    }).catch((err) =>{
        res.json(err)
    });


});


module.exports = router;