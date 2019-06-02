var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/consulta', function(req, res, next) {
	   var myId = req.query.id2;
	   console.log(myId);
	  request('http://localhost:3000/musica/'+ req.query.id2, function (err, response,  data) {
       if (err) {
      res.status(404).json({
        mensaje: "No se encontro"
      });
    } 
    else  {
      var datos=JSON.parse(data);
    	if (datos.id == null) {
      res.status(404).json({
        mensaje: "No existe"
      });
    } else {
      var datos=JSON.parse(data);
    	console.log(datos);
      res.render('resultado',{id:datos.id, artista:datos.artista, cancion:datos.cancion, album:datos.album, genero:datos.genero, año:datos.año, imagen:datos.imagen});
    }
    }

     });
});

router.get('/eliminar', function(req, res, next) {
     var myId = req.query.id3;
     console.log(myId);
    request.delete('http://localhost:3000/musica/'+ req.query.id3, function (err, response,  data) {
       if (err) {
      res.status(404).json({
        mensaje: "No se encontro"
      });
    } 
    else  {
      var datos=JSON.parse(data);
      if (datos.id == null) {
      res.status(404).json({
        mensaje: "No existe"
      });
    } else {
      var datos=JSON.parse(data);
      console.log(datos);
      res.render('resultado',{id:datos.id, artista:datos.artista, cancion:datos.cancion, album:datos.album, genero:datos.genero, año:datos.año, imagen:datos.imagen});
    }
    }

     });
});

module.exports = router;
