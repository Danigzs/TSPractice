var mongoose = require('mongoose');
var Reporteplandiario = mongoose.model('Reporteplandiario');

//GET - Return all registers
exports.findAll = function (req, res) {
  Reporteplandiario.find(function (err, reportes) {
    if (err) res.send(500, err.message);
    console.log('GET /reportes')
    res.json({
      reportes: reportes
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
  Reporteplandiario.findById(req.params.id, function (err, reporte) {
    if (err) return res.send(500, err.message);
    console.log('GET /reporte/' + req.params.id);
    res.status(200).jsonp({reporte:reporte});
  });
};

//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var reporte = new Reporteplandiario({

    fecha:req.body.fecha,
    planesdiarios:req.body.planesdiarios,
    visitasplaneadas:req.body.visitasplaneadas,
    entrevistasrealizadas:req.body.entrevistasrealizadas,
    ventasconcretadas:req.body.ventasconcretadas,
    montototaldepedidos:req.body.montototaldepedidos,
    visitasrecibidas:req.body.visitasrecibidas,
    montodecobranza:req.body.montodecobranza,
    montodedescuentos:req.body.montodedescuentos,
    revisado:req.body.revisado,
    creador:req.body.creador
   

  });
  reporte.save(function (err, reporte) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
      reporte: reporte
    });

  });
};

// //PUT - Update a register already exists
// exports.update = function (req, res) {
//   console.log("Update role " + req.params.id)
//   var _reporte = new Reportebordado(req.body);
//   Reportebordado.findById({_id:req.params.id}, function (err, reporte) {
     
//     reporte.name =  _reporte.name,
//   reporte.isAdmin =  _reporte.isAdmin,
 
//     reporte.save(function (err,reporte) {
//       if (err) return res.send(500).json({reporte:null});
//      res.status(200).json({
//        reporte: reporte
//     });
//     });
//   });
// };

//DELETE - Delete a register with specified ID
exports.delete = function (req, res) {
  Reporteplandiario.findById(req.params.id, function (err,reporte) {
    reporte.remove(function (err) {
      if (err) return res.send(500, err.message);
      res.json({
        message: 'Successfully deleted'
      });
    });
  });
};