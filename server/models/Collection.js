const mongoose = require('mongoose');

const { Schema } = mongoose;

const collectionSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  pieces: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Piece',
    },
  ],
});

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;
