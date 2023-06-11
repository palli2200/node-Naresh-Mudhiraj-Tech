var express = require('express')

const router = express.Router(); // 


router.get("/details",(req,res,next)=>{
    let person_listrole = [
        {name:"palli", Add:"vizag", id:101}
    ]

    res.send(person_listrole)
})

module.exports = router