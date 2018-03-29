
var express = require('express')

var path = require('path')

var cookieParser = require('cookie-parser')

var bodyParser = require('body-parser')

var {totalData, mdDatas, Tags, Cates} = require('./yield.js')

var app = express()

var router = express.Router()

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'jade')

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())

app.use(cookieParser())

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'x-Request-with')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('X-Powered-By', '4.15.2')
    res.header('Content-Type', 'application/json;charset=utf-8')
    next()  
})
app.use(express.static(path.join(__dirname, 'public')))


app.get('/tags', function(req, res){
    res.json({
        code: 200,
        message:'获取标签归档成功',
        data: Tags
    })
})

app.get('/cates', function(req, res){
    res.json({
        code: 200,
        message:'获取分类归档成功',
        data: Cates
    })
})
// console.log(Cates)
app.listen(3000, function(err){
    if (err) {
        console.log(err)
    } else {
         console.log('node is ok')
    }
   
})
