const express = require('express');
const mongoose = require('mongoose');
const user_routing = require('./controllers/userController');
const role_routing = require('./controllers/roleController');
const PERSON_SCHEMA = require('./models/personSchema');

const app = express();
const PORT = 3000;

// Database connection
mongoose.connect('mongodb://localhost:27017/test')
  .then(() => console.log('Connected!'))
  .catch(err => console.log('Connection failed:', err));

// Middleware
app.use(express.json());

// Routes
app.post('/create', async (req, res, next) => {
  let body = req.body;

  let new_body = {
    fname: body.firstname,
    lname: body.lastname,
    mno: body.mobileno,
    addr: body.address
  };

  let new_person = new PERSON_SCHEMA(new_body);
  new_person.save()
    .then(result => {
      res.send({ message: 'Success', person: new_person });
    })
    .catch(err => {
      res.send('Fail');
    });

  // res.send(new_person)
});

app.post("/create_many", (req, res, next) => {
  let body = req.body;

  PERSON_SCHEMA.insertMany(body)
    .then(() => {
      res.send({ Status: 200, Msg: "Created" });
    })
    .catch((err) => {
      res.send({ Status: 500, Msg: err.message });
    });
});

app.get("/person-list", async (req, res, next) => {
  let listDetails1 = await PERSON_SCHEMA.find({});
  res.send(listDetails1);
});

app.get("/get-person", async (req, res, next) => {

  // let per = await PERSON_SCHEMA.findOne({});  // return first documents
  // let per = await PERSON_SCHEMA.findOne({}).sort({_id: -1}); // find lasst document 
  // res.send(per)
  let prms = req.query.addr
  // let p = await PERSON_SCHEMA.find();
  let p = await PERSON_SCHEMA.findOne({addr: prms}).sort( {addr: -1});
  res.send(p);
});

// Route handlers
// app.use('/user', user_routing);
// app.use('/role', role_routing);

// Start the server
app.listen(PORT, () => {
  console.log('SERVER ON:', PORT);
});
