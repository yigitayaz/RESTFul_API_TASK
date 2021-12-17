var countryRouter = require("../endpoints/countries");
var countries = require("../models/schema");




countryRouter.get('/optimal',function (req, res) {
    const aggConst =
        [
            {
                $group:
                    {
                        _id: {$toLower: "$region"},
                        sum:{$sum:1},
                        cl: {$push: '$name'},
                    }

            },
            {
                $project:
                    {    region: '$_id',
                        _id:0,
                        minSalesReq:  {$ceil:{$divide: ["$sum",7]}},
                        //groupSize: {$ceil:{$divide: ['$sum','$minSalesReq']}},
                        countryList: {
                            $map: {
                                input: {$range: [0,{$ceil:{$divide: ["$sum",7]}} ]},
                                as: "index",
                                in: {$slice: ["$cl", {$multiply:["$$index",{$ceil:{$divide: ['$sum',{$ceil:{$divide: ["$sum",7]}}]}}]},{$ceil:{$divide: ['$sum',{$ceil:{$divide: ["$sum",7]}}]}} ]}
                            }

                        }

                    }


            },
            {
                $unwind:'$countryList'
            },
            {
                $project: {
                    region: 1,
                    countryList:1,
                    countryCount:{$size:"$countryList"}
                }
            }

        ]

    countries.aggregate(aggConst,function (err,result){
        if(err) res.json(err);
        res.json(result);
    });




});







module.exports = countryRouter;