const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const client = require('@mailchimp/mailchimp_marketing');


const app = express();


app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html")

});

app.post("/", function(req, res) {
  const fName = req.body.firstName;
  const lName = req.body.lastName;
  const eMail = req.body.email;
  client.setConfig({
    apiKey: "fba59832fadce6ec897c5e51d1a7f1e1-us17",
    server: "us17",
  });

  const run = async () => {
    const response = await client.lists.batchListMembers("c21c47dac5", {
      members: [{
        email_address: eMail,
        status: "subscribed",
        merge_fields: {
          FNAME: fName,
          LNAME: lName
        }
      }],
    });
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/succes.html");
    } else {
      res.sendFile(__dirname + "/failure.html")

    }
    console.log(response);

  };

  run();
});

app.post("/failure", function(req, res){
  res.redirect("/");
})



app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
