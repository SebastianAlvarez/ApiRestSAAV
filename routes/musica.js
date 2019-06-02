var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Musica = require('../models/modelo');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Musica.find({}, function(err, datos) {
    res.status(200).json(datos);
  });

});


router.get('/:id2', function(req, res, next) {
  Musica.findOne({
    'id': req.params.id2
  }, function(err, datos) {
    if (datos == null) {
      res.status(404).json({
        mensaje: "No existe"
      });
    } else {
      res.status(200).json(datos);
    }

  });
  //res.json(req.params.userId);
});

router.post('/', function(req, res, next) {
  var musica = Musica({
    id: req.body.id,
    artista: req.body.artista,
    cancion: req.body.cancion,
    album: req.body.album,
    genero: req.body.genero,
    año: req.body.año,
    imagen: req.body.imagen
  });
  //res.send(usuario);


  musica.save(function(err, data) {
    if (err) {
      res.status(404).json({
        mensaje: "Error al guardar"
      });
    } else {
      res.status(201).json(data);
    }
  });

});

router.delete('/:id3', function(req, res, next) {
  Musica.findOneAndDelete({
    'id': req.params.id3
  }, function(err, data) {
    if (err) {
      res.status(404).json(err);
    }
    res.status(200).json(data);
  });
});

router.delete('/',function(req,res,next){
  res.status(405).json({mensaje:'Accion no permitida'});
});

router.put('/:id',function(req,res,next){
  var item={
    artista: req.body.artista,
    cancion: req.body.cancion,
    album: req.body.album,
    genero: req.body.genero,
    año: req.body.año,
    imagen: req.body.imagen
  };
  Musica.findOneAndUpdate({
    'id':req.params.id
  },{$set:item},function(err, data){
    if (err) {
      res.status(404).json(err);
    }else{
      if (data) {
        res.status(200).json(data);
      } if(data== null){
        res.status(204).json(err);
      }
    }
  } );
});

router.put('/',function(req,res,next){
  res.status(405).json({mensaje:'Accion no permitida'});
});

router.patch('/artista/:id',function(req,res,next){
  var item={
    artista: req.body.artista
  };
  Musica.findOneAndUpdate({
     'id':req.params.id
  },{$set:item},function (err,data){
    if (err) {
      res.status(404).json(err);
    }else{
      if (data) {
        res.status(200).json(data);
      }if (data == null) {
        res.status(204).json(err);
      }
    }
  } );
});

router.patch('/cancion/:id',function(req,res,next){
  var item={
    artista: req.body.artista
  };
  Musica.findOneAndUpdate({
     'id':req.params.id
  },{$set:item},function (err,data){
    if (err) {
      res.status(404).json(err);
    }else{
      if (data) {
        res.status(200).json(data);
      }if (data == null) {
        res.status(204).json(err);
      }
    }
  } );
});

router.patch('/album/:id',function(req,res,next){
  var item={
    album: req.body.album
  };
  Musica.findOneAndUpdate({
     'id':req.params.id
  },{$set:item},function (err,data){
    if (err) {
      res.status(404).json(err);
    }else{
      if (data) {
        res.status(200).json(data);
      }if (data == null) {
        res.status(204).json(err);
      }
    }
  } );
});

router.patch('/genero/:id',function(req,res,next){
  var item={
    genero: req.body.genero
  };
  Musica.findOneAndUpdate({
     'id':req.params.id
  },{$set:item},function (err,data){
    if (err) {
      res.status(404).json(err);
    }else{
      if (data) {
        res.status(200).json(data);
      }if (data == null) {
        res.status(204).json(err);
      }
    }
  } );
});

router.patch('/ano/:id',function(req,res,next){
  var item={
    año: req.body.año
  };
  Musica.findOneAndUpdate({
     'id':req.params.id
  },{$set:item},function (err,data){
    if (err) {
      res.status(404).json(err);
    }else{
      if (data) {
        res.status(200).json(data);
      }if (data == null) {
        res.status(204).json(err);
      }
    }
  } );
});

router.patch('/imagen/:id',function(req,res,next){
  var item={
    imagen: req.body.imagen
  };
  Musica.findOneAndUpdate({
     'id':req.params.id
  },{$set:item},function (err,data){
    if (err) {
      res.status(404).json(err);
    }else{
      if (data) {
        res.status(200).json(data);
      }if (data == null) {
        res.status(204).json(err);
      }
    }
  } );
});

router.patch('/',function(req,res,next){
  res.status(405).json({mensaje:'Accion no permitida'});
});



module.exports = router;