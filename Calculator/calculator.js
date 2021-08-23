const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmiCalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){
  var weight = parseFloat(req.body.we);
  var height = parseFloat(req.body.he);

  var bmi = ((weight)/(Math.pow(height, 2)));
  res.send("Your BMI is " + bmi);

});

app.post("/", function(req, res){
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);

  var result = num1 + num2;
  res.send("That is " + result);
});

app.listen(3000, function(){
  console.log("Server started at 3000");
});
