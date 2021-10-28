const express = require("express");
const app = express();
var bodyParser = require('body-parser');  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
app.use(express.static('public'));  

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/create", function (req, res){
    response = {  
        first_name:req.body.first_name,  
        last_name:req.body.last_name  
    };  
    console.log(response);  
    res.end(JSON.stringify(response));
});
app.listen(3001, function () {
  console.log("Server is running on localhost3001");
});
