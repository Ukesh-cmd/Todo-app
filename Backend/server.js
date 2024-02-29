const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const todos = require('./route/todoRoute')
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.use('/api', todos);
const port = 3000;
app.listen(port, ()=>{
    console.log(`Server runnsing on port ${port}`);
})
