const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
require('dotenv').config();


process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
})
app.post("/", function(req, res) {
const query = req.body.cityName;
const unit = "metric";
const appID = process.env.APPID;
 const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&units="+ unit +"&appid="+ appID +"";
https.get(url, function(response) {
  console.log(response.statusCode);

  response.on("data", function(data){

    const weatherData = JSON.parse(data);
    const temp = weatherData.main.temp;
    const des = weatherData.weather[0].description;
    const icon = weatherData.weather[0].icon;
    const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    res.write("<p>The weather is currently " + des + "</p>");
    res.write("<h1>The temperature in "+ query +" is " + temp + " degrees Celzius.</h1>");
    res.write("<img src=" + imageURL + " >");
    res.send();
  })
})
})

app.listen(3000, function() {
  console.log("Server is running on 3000...");
})
