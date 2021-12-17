var countryRouter = require("../endpoints/countries");
var countries = require("../models/schema");




countryRouter.get('/salesrep',function (req, res) {
     const aggConst =
         [
              {
                   $group:
                       {
                            _id: {$toLower: "$region"},
                            sum:{$sum:1}

                       }

              },
              {
                $project:
                    {    region: '$_id',
                         _id:0,
                         minSalesReq: {$ceil: {$divide: ["$sum",7]}},
                         maxSalesReq:{$cond:[{$lt: ["$sum",3]},1,{$floor: {$divide: ["$sum",3]}}]}

                    }
              }
         ]

     countries.aggregate(aggConst,function (err,result){
          if(err) res.json(err);
          res.json(result);
     });




});
    






module.exports = countryRouter;