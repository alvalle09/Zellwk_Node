console.log('May node be with ou!')

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
var db



MongoClient.connect('mongodb://alvalle09:drumkit09@ds231245.mlab.com:31245/some-favorite-famous-quotes', (err, database) => {
    if (err) return console.log(err)
    db = database
    //start the server
    app.listen(3000, ()=> {
        console.log('listening on 3000')
    })
} )

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

app.get('/',  (req, res) => {
    //res.send('Hello World$$$')
    //Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
    //res.sendFile(__dirname + '/index.html')
    
    var cursor = db.collection('quotes').find().toArray((err, result)=>{
        if (err) return console.log(err)
        res.render('index.ejs', {quotes: result})
    })
    //console.log(cursor)
})

app.post('/quotes', (req, res) => {
    //console.log(req.body)
    db.collection('quotes').save(req.body, (err, result)=> {
       if (err) return console.log(err)
        console.log('saved to database')
        res.redirect('/')
   })
})

