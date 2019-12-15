var express = require("express")

var app = express()


var myjson = require("./courses.json")

var router=require("./router.js")
app.use("/", router)
app.use("/mycourses", router);

app.listen(3000, function() {
  console.log("Server is running on port 3000");
})
