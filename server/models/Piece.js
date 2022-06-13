const mongoose = require('mongoose');

const { Schema } = mongoose;

const formatDate = (date) => {
  const newDate = new Date(date);
  return newDate.toUTCString();
};

const piecesSchema = new Schema({

  name: {
      type: String,
      required: true,
      maxLength: 280
  },
  description: {
      type: String,
      required: true,
  },
  artist: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: true,
  },
  createdAt: {
      type: Date,
      default: Date.now,
      get: formatDate
  }
},
{
  toJSON: {
      getters: true
  },
  id: false,
});

const Piece = mongoose.model('piece', piecesSchema);

module.exports = Piece;
