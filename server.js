const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes');

mongoose.connect('mongodb://localhost:27017/floricultura', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, function(erro){
    if(erro){
        console.log('Erro:' + erro);
    }else{
        console.log('MongoDB conectado com sucesso')
    }
});

const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(5000, function(){
    console.log(`Server is running on port ${5000}`);
})