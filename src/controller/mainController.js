const {validationResult} = require('express-validator')

exports.get = (req, res) => {
    try {
        return res.status(200).json({
            message: "Get Api Successfully work"
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}


exports.CreateData = (req, res) => {
    try {
        let errors = validationResult(req)
        if(errors){
            return res.status(422).json({
                errors: errors.errors
            })
        }else{
            let payload = req.body;
            console.log(payload);
                return res.status(200).json({
                    message:"Data successfully Saved",
                    data:payload
                })

        }
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}