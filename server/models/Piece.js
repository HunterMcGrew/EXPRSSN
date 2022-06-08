const mongoose = require('mongoose');

const { Schema } = mongoose;

const pieceSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  artist: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
});

const Piece = mongoose.model('piece', pieceSchema);

module.exports = Piece;
