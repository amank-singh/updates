const express = require('express')
const mysql = require('mysql')
const router1 = express.Router()

function getCon(){
  return mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodetest'
  })
}

//SIGNUP

router1.post('/sing-in', (req,res)=>{
  console.log('Trying to sign in');
  console.log('Email: ' + req.body.create_email)
  console.log('password: ' +req.body.create_password)
  const emailx = req.body.create_email;
  const passwordx = req.body.create_password;
  const queryString = "Select * from login_sign where email = (?)";
  const connection =getCon()
  connetion.query(queryString, [emailx],(err, rows, fields) => {

    if(rows.password == passwordx){
      rows.confirm_singup = 1;
      res.send('<script>window.location.href="confirm_singup.html"</script');
    }
    else {
      {
        row.confirm_singup = 0;
        res.send('<script>window.location.href="failed-signup.html"</script>');
      }
    }

  })





})







module.exports = router1
