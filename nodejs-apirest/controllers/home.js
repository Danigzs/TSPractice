var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var User = mongoose.model('User');

exports.getHome = function(req,res){
    var userId = req.params.id;
    console.log(req.params);

    User.findById({_id:userId}, function (err, user) {
        Order.find(function(err,orders){
            if(user.role._id == 1){
                res.json({
                    orders: orders
        
                });
            }
            else {
                res.json({
                    orders: orders.filter(function(v,i){ if(!v.user) return false; if(v.user._id == userId) return true; })
        
                });
            }
            
        });
    });
     
} 
 