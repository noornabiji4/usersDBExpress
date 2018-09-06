var express = require('express');
var router = express.Router();
var db = require('../modules')

/* GET users listing. */
// localhost:3000/users/
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/users' ,(req,res)=>{
        db.Users.find()
        .then((users)=> res.json(users))
        .catch((err)=> res.send(err));
});

router.post('/users',(req,res)=>{
      db.Users.create(req.body)
      .then((Users)=> res.json(Users))
      .catch((error)=> res.send(error))
});

module.exports = router;
