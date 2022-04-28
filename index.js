var express = require('express');
var app = express();

app.set('view engine', 'hbs');

var hbs = require('hbs');

app.use(express.static(__dirname + '/assets'));

var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended : false}));


app.get('/', (req,res)=>{
    res.render('index');
})

const PORT = process.env.PORT || 5000;

app.listen(PORT);

console.log(`Server running at port ${PORT}`);