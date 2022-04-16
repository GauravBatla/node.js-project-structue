const mongoose = require('mongoose')
var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

exports.createConnction = () => {
    // try {
    //     mongoose.connect('mongodb://localhost:27017/test')
    // } catch (error) {

    // }

    return new Promise((resove, reject) => {
        var connectionString = `mongodb+srv://sachin:XReivM35vXKLqb5Y@cluster0.oiold.mongodb.net/ecomm?retryWrites=true&w=majority`;
        // var connectionString = `mongodb+srv://sachin:XReivM35vXKLqb5Y@cluster0.oiold.mongodb.net/bookcare?retryWrites=true&w=majority`;
        mongoose.connect(connectionString);
        mongoose.connection.on('connected', function () {
            console.log(("Mongoose default connection is open to ", connectionString));
            resove(("Mongoose default connection is open to ", connectionString))
        });
        mongoose.connection.on('error', function (err) {
            reject(err)
            console.log(("Mongoose default connection has occured " + err + " error"));

        });
        mongoose.connection.on('disconnected', function () {
            reject("db connection disonnect")
            console.log(("Mongoose default connection is disconnected"));
        });
    })
}