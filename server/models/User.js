const mongoose = require('mongoose');

const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt');

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

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  pieces: [
    {
      type: Schema.Types.ObjectId,
      ref: "piece",
    },
  ],
},
{
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false,
});


// const userSchema = new Schema({
//   username: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//     match: [/.+@.+\..+/, 'Must match an email address!'],
//   },
//   password: {
//     type: String,
//     required: true,
//     minlength: 5,
//     // match: [
//     //   /^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
//     //   'Must match 6 - 20 chars, 1 upper, 1 lower, and requires a caps ',
//     // ],
//   },
//   collections: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'Collection',
//     },
//   ],
// });

// Set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
