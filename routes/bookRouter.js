const express = require("express");
const app = express();
const router = express.Router();
const userController = require("../controller/userController");
app.use('/POST/api/books',userController.register);
app.use('/DELETE/api/books/:id',userController.delete);
app.use('/PUT/api/books/:id',userController.update);
app.use('/GET/api/books/:id',userController.readSingle);
app.use('/GET/api/books',userController.readAll);

app.use("",router);
module.exports = app;