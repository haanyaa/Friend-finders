
//Require the friends data from the data folder

var friends = require("./friendsData");

//Routing the clients requests

module.exports= function(app){
    app.get("/api/friendsData",function(req,res){
        res.json(friendsData)
    });

    app.post("/api/friendsData",function(req,res){


    })
}
