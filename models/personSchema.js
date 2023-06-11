var mongoose=require("mongoose")

const PERSON_SCHEMA =  new mongoose.Schema({
    fname: {type: String},
    lname: {type: String},
    mno: {type: String},
    addr: {type: String}
})

module.exports = mongoose.model("persons123", PERSON_SCHEMA)

