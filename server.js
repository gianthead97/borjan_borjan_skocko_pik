const express = require('express');
const app = express();
const db_module = require('./connection');

app.listen(3000, () => console.log(`Example app listening on port 3000!`));

app.use('/', (req, res, next)=> {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
})


app.get('/:result', (req, res) => {
    //console.log(req.headers);
    //console.log('yes');
    console.log(req.params.result);
    responseData = db_module.getNewHighScoreTable();
    console.log(responseData);
    //res.send(responseData);
});


