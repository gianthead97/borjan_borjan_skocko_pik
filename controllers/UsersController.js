const util = require('util');
const MongoDBService = require('../services/MongoDBService');

class UsersController {
  constructor(request, response) {
    this.request = request;
    this.response = response;

    this.mongoDBService = new MongoDBService('mongodb://root:example@localhost:27017',
    'scoreboard');
  }

  static registerRoutes(app) {
    app.get('./', (request, response) => {
      new UsersController(request, response).getUsers();
    });

    app.post('./', (request, response) => {
      new UsersController(request, response).postUsers();
    });


    

  }

  async getUsers() {
    await this.mongoDBService.connect();

    let users = await this.mongoDBService.find('scores');

    this.mongoDBService.disconnect();
    this.response.send(users);
  }

  
  async postUsers() {
    await this.mongoDBService.connect();

    await this.mongoDBService.insert('scores', {
      pts: parseInt(this.request.body.pts),
      date: new Date()  
    });

    this.mongoDBService.disconnect();
    this.response.send('Success');
  }

}
module.exports = UsersController;
