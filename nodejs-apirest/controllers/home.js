var mongoose = require('mongoose');
var Order = mongoose.model('Order');

exports.getHome = function(req,res){
    
    //Obtener ordenes que vayan a vencer en 10 dias
    Order.find({isPaid:0},function(err,orders){
        res.json({
        orders: orders
      });
    });
} 
 