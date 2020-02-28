const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'test.html'))
})

app.listen(port)