const {check,param} = require('express-validator')

exports.CreateData = [
    check('name').notEmpty().withMessage('Name is required'),
    param('name').notEmpty()

]