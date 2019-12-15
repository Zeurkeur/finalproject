var express=require("express")
var router=express.Router()
const myjson=require("./courses.json")

router.get('/', function(req,res) {
    res.render("project3.ejs", {jsondata: myjson})
})


router.get('/mycourses', function(req,res) {
    res.json(myjson)


})


module.exports=router
