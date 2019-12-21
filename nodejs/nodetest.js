const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')


const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.use(morgan('short'))

app.use(express.static('../'))


const router = require('./routes/user.js')
app.use(router)



app.listen(3003, ()=> {

  console.log('Server is up and running 3003')
})
