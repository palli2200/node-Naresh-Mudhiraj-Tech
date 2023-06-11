var express = require("express")

const router = express.Router();// Router level middle wear 

router.get("/details",(req,res,next)=>{
    let person_list = [
        {name:'naga', addr:'Hydrabad', id:1},
        {name:"anji", addr:"jrg", id:2}
    ]
    res.send(person_list)
})

module.exports = router