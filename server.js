const express = require('express');
var  app = express();
const port = 3000;
var bodyParser = require('body-parser')
const AccountModel = require('./models/account.js');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/register', (req, res, next) => {
   var username =  req.body.username
   var password =  req.body.password

   console.log(username, password)

   AccountModel.create({ username: username, password: password})
   .then(() => res.json('Create Account SuccessFull'))
   .catch(err => res.status(500).json('Create Account Failure'))
});

app.get('/',(req, res, next) =>{
    res.json('Home')
});


app.listen(port, ()=> { 
console.log('Server started on port');
});