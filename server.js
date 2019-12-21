const express = require('express');
const bodyParser = require('body-parser');
const UsersController = require('./controllers/UsersController');

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

UsersController.registerRoutes(app);

app.use('./', (req, res, next)=> {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next(); 
});


app.listen(3000, () => console.log(`Example app listening on port 3000!`));


