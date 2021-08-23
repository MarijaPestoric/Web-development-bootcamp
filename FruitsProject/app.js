const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({

  rating: 10,
  review: "COOOOL fruit."
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const strawberry = new Fruit({
  name: "Strawberry",
  rating: 10,
  review: "EXTRA!"
});

strawberry.save();

// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple
//
// });

// person.save();



Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    });

  }
});
//
// Fruit.updateOne({_id: "5f652f76d2d6ee2d881d302e"}, {name: "Peach"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully updated the document");
//   }
// });
//
// Fruit.deleteOne({_id: "5f652f76d2d6ee2d881d302e"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted the record.")
//   }
// });
// Person.deleteMany({name: "Milan"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted records.")
//   }
// });
Person.updateOne({name: "Milan"}, {favouriteFruit: strawberry}, function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("Succesfully updated the document");
  }
});
