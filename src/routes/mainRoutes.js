const routes = require('express').Router();
const mainController = require('../controller/mainController')
const Validation = require('../validations/validator')
// const routes = express()
routes.get('/',mainController.get)

routes.post('/save',Validation.CreateData, mainController.CreateData)

module.exports = routes