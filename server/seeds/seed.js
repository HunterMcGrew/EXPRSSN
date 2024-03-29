const db = require('../config/connection');
const { User, Piece, Category, Collection } = require('../models');

const userData = require('./userData.json');
const pieceData = require('./pieceData.json');
const categoryData = require('./categoryData.json');
const collectionData = require('./collectionData.json');

db.once('open', async () => {
  // clean database
  await User.deleteMany({});
  await Piece.deleteMany({});
  await Category.deleteMany({});
  await Collection.deleteMany({});

  // bulk create each model
  const user = await User.insertMany(userData);
  const piece = await Piece.insertMany(pieceData);
  const category = await Category.insertMany(categoryData);
  const collection = await Collection.insertMany(collectionData);

  // for (newClass of classes) {
  //   // randomly add each class to a school
  //   const tempSchool = schools[Math.floor(Math.random() * schools.length)];
  //   tempSchool.classes.push(newClass._id);
  //   await tempSchool.save();

  //   // randomly add a professor to each class
  //   const tempProfessor = professors[Math.floor(Math.random() * professors.length)];
  //   newClass.professor = tempProfessor._id;
  //   await newClass.save();

  //   // reference class on professor model, too
  //   tempProfessor.classes.push(newClass._id);
  //   await tempProfessor.save();
  // }

  console.log('all done!');
  process.exit(0);
});
