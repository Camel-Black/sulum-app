var express = require('express');
var app = express()
var api = require('./api')
var morgan = require('morgan')
var bodyParser = require('body-parser')
var cors = require('cors')

app.set('port',8081);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
    res.setHeader('Access-Control-Allow-Credentials',true);  
    next();
  });
app.use('/api',api)


app.use(express.static('static'))
app.use(morgan('dev'))
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/sulum',{
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
const db = mongoose.connection;
db.on('error',console.error.bind(console,"err happend on db"))
db.once('open',function(){
    console.log('connected to mongodb')
})
app.listen(app.get('port'),function(){
    console.log("API listen 8081")
})
