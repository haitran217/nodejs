const fs = require('fs');

const express = require('express');
const bodyParser = require('body-parser');

const imgRouter = require(__dirname + '/modules/api/images/');

var app = express();

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json({extend : true}));
app.use(bodyParser.urlencoded({extended : true}));

app.use('/api/images', imgRouter);

app.listen(6969, (req, res) => {
  console.log('thanh cong');
})