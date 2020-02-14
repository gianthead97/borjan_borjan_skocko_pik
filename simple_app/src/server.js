const express = require('express');
const bodyParser = require('body-parser');
const UsersController = require('./controllers/UsersController');
const cors = require('cors');
const app = express();

express.static.mime.define({'application/javascript': ['js']});
app.all('*', function (req, res) {
    res.sendFile(__dirname+'/index.html') /* <= Where my ng-view is located */
});

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(cors());
UsersController.registerRoutes(app);


app.listen(3000, () => console.log(`Example app listening on port 3000!`));


