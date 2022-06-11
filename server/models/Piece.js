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
    required: false,
    trim: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  // will be HTTP from cloudinary
  link: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
});

const Piece = mongoose.model('piece', pieceSchema);

module.exports = Piece;
