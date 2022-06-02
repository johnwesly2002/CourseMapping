var express = require('express');
var router = express.Router();
var monk=require('monk');
//for connecting mongoDB
//var mongoose1=require('mongoose');
var db=monk('localhost:3000/sample');
var collection=db.get("form");
//getting the data from the insert js file
//var Data = require('../module/insert.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/done', function(req, res, next) {
  res.render('sample', { title: 'Express' });
});
router.get('/login',function(req,res,next){
  res.render('loginpage',{title:'Express'});

})
router.get('/login',function(req,res,next){
  if(req.sessions && req.sessions.student){
    res.render('loginpage',{title:'Express'});

  }else{
    req.sessions.reset();
    res.redirect('/done');
  }
})

module.exports = router;
/* POST home page. */
router.post("/senddata",function(req,res) {
  var data = {
    firstname : req.body.firstname,
    lastname : req.body.lastname
  }
  collection.insert(data,function(docs,err) {
    if(docs) {
      res.send(docs);
    }
    else{
      res.send(err);
    }
  })
});
router.get('/getdata',function(req,res){
  console.log(req.body);
  collection.find({},function(err,doc){
    if(docs){
      res.send(docs);
      console.log(docs);
    }
    else{
      res.send(err);
    }
  })
});
router.post('/post1',function(req,res){
  collection.update({"_id":req.body_id},{$set:{"firstname":req.body.firstname,"lastname":req.body.lastname}},
    function(docs,err){
      if(docs){
        res.send(docs);
      }
      else{
        res.send(err);
      }

    }
    )
})
/*router.post('/registration',function(req,res){
  var studentdata=new Data({
    firstname:req.body.firstname,
    lname:req.body.lastname,
    
  })
  studentdata.save(function(err, results){
    if(results){
      res.send(results) //return to console

    }else{
      res.send(err) // return to consolr with error msg

    }
  })*/



