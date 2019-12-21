
const express= require('express');

const bodyParser=require('body-parser');

var mysql = require('mysql');
const cors=require('cors');

var con = mysql.createConnection({

  host: "database-1.cndxwdg4xfs6.ap-south-1.rds.amazonaws.com",

  user: "admin",

  password: "password",

  database: "mockboard"

});





con.connect(function(err) {

  if (err) throw err;



 console.log('connection successful');

});
