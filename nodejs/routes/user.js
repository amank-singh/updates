const express = require('express')
const mysql = require('mysql')
const router = express.Router()




function getConnection(){
  return mysql.createConnection({
    //host: 'localhost',
      host: 'database-1.cndxwdg4xfs6.ap-south-1.rds.amazonaws.com',
      user: 'admin',
      password: 'password',
      database: 'mockboard'
  })
}




//EMAIL ID TEST
router.post('/emailid',(req,res)=>{
console.log('trying to create a user');
console.log("First Name " +req.body.create_email);
const emailx=req.body.create_email;

console.log(emailx);
const connection = getConnection()

const queryString = "INSERT INTO emailid (email) VALUE (?)"

connection.query(queryString,[emailx], (err, results, fields)=>{

    if(err){
      console.log("failed" + err);
      res.sendStatus(500);
      return
    }
    console.log('inserted');

    res.send('<script>window.location.href="downloads-redirected.html";</script>');

  })
})

//Resource Centre
router.post('/resource-centre',(req,res)=>{
console.log('trying to create a user');
console.log("emailid Name " +req.body.create_email);
console.log("full Name " +req.body.create_email);
const emailx=req.body.create_email;
const fullname=req.body.create_name;

console.log(emailx);
console.log(fullname);
const connection = getConnection()

const queryString = "INSERT INTO emailid (name, email) VALUE (? , ?)"
connection.query(queryString,[fullname, emailx], (err, results, fields)=>{

    if(err){
      console.log("failed" + err);
      res.sendStatus(500);
      return
    }
    console.log('inserted');

    res.send('<script>window.location.href="downloads-redirected.html";</script>');

  })

})




//HIRING FORM
router.post('/hiring-form',(req,res)=>{
console.log('trying to enter a regitration');
console.log("First Name " +req.body.create_firstname1);
console.log("Last Name " +req.body.create_lastname1);
console.log("Subject Name " +req.body.create_subject1);
console.log("Email Name " +req.body.create_email1);
console.log("School Name " +req.body.create_school1);

const emailx=req.body.create_email1;
const firstnamex=req.body.create_firstname1;
const lastnamex=req.body.create_lastname1;
const subjectx=req.body.create_subject1;
const schoolx=req.body.create_school1;


const connection = getConnection()

const queryString = "INSERT INTO hiring (first_name, last_name, subject, email, school) VALUE (? , ? , ?, ?, ?)"

connection.query(queryString,[firstnamex, lastnamex, subjectx, emailx, schoolx], (err, results, fields)=>{

    if(err){
      console.log("failed" + err);
      res.sendStatus(500);
      return
    }
    console.log('inserted');

    res.send('<script>window.location.href="index.html";</script>');

  })
})




//REGISTRATION FORM
router.post('/register-form',(req,res)=>{
console.log('trying to enter a regitration');
console.log("First Name " +req.body.create_firstname);
console.log("Last Name " +req.body.create_lastname);
console.log("Class Name " +req.body.create_class);
console.log("Email Name " +req.body.create_email);
console.log("School Name " +req.body.create_school);

const emailx=req.body.create_email;
const firstnamex=req.body.create_firstname;
const lastnamex=req.body.create_lastname;
const classx=req.body.create_class;
const schoolx=req.body.create_school;


const connection = getConnection()

const queryString = "INSERT INTO registration (first_name, last_name, class, email, school) VALUE (? , ? , ?, ?, ?)"

connection.query(queryString,[firstnamex, lastnamex, classx, emailx, schoolx], (err, results, fields)=>{

    if(err){
      console.log("failed" + err);
      res.sendStatus(500);
      return
    }
    console.log('inserted');

    res.send('<script>window.location.href="index.html";</script>');

  })
})



//NEWSLETTER
router.post('/newsletter',(req,res)=>{
console.log('trying to create a user');
console.log("First Name " +req.body.create_email);
const emailx=req.body.create_email;

console.log(emailx);
const connection = getConnection()

const queryString = "INSERT INTO email (emailid) VALUE (?)"

connection.query(queryString,[emailx], (err, results, fields)=>{

    if(err){
      console.log("failed" + err);
      res.sendStatus(500);
      return
    }
    console.log('inserted');

    res.send('<script>window.location.href="index.html";</script>');

  })
})
















router.get('/user', (req,res)=>{

  console.log("Fetching user with id: " + req.params.id)

  const connection = getConnection()
const queryString = "Select * FROM emailid "

connection.query(queryString, (err, rows,fields)=>{

  if(err)
  {
    console.log("failed" + err);
    res.sendStatus(500);
    res.end();
  }

res.json(rows);

})



})


module.exports = router
