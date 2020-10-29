// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




// Routes
// =============================================================
var tables=[
  {
  name: "helmer",
  Phone: "6681853283",
  Email:  "a00819255@itesm.mx",
  id: "a00819244"
  }
];
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });
  
  app.post("/api/tables", function(req, res) {

    var newReservation = req.body;
  
    console.log(newReservation);
  
    tables.push(newReservation);
  
    res.json(newReservation);
  });
  
  
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  