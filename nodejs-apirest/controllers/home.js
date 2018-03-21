var mongoose = require('mongoose');
var Order = mongoose.model('Order');

exports.getHome = function(req,res){
    var userId = req.params.id;
    console.log(req.params);


     Order.find(function(err,orders){
        res.json({
            orders: orders.filter(function(v,i){ if(!v.usercreador) return false; if(v.usercreador._id == userId) return true; })
        });
    });
} 
 