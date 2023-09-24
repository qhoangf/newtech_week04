const express = require('express');
const router = express.Router();
const mygroupController = require('../app/controllers/mygroupController');



function route(app){
        app.get('/message/:mssv',mygroupController.getMessageById);
        app.get('/message/',mygroupController.getMessage);
        app.post('/test',mygroupController.addStudent);
        app.get('/:mssv',mygroupController.getMessageById);
        app.get('/',mygroupController.getAll);
}
module.exports = route;

