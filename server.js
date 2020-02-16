const express = require('express');
const bodyParser = require('body-parser');
const UsersController = require('./controllers/UsersController');
const cors = require('cors');
const app = express();



app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(cors());
UsersController.registerRoutes(app);


app.listen(3001, () => console.log(`Example app listening on port 3001!`));


