var express = require('express');
var app = express()
var api = require('./api')
var morgan = require('morgan')
var bodyParser = require('body-parser')
var cors = require('cors')

app.set('port',8081);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}))
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
