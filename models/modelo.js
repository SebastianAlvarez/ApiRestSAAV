var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MusicaSchema =  Schema({
  id: Number,
  artista:String,
  cancion:String,
  album:String,
  genero:String,
  año: Number,
  imagen:String
});



module.exports = mongoose.model('Musica', MusicaSchema);
