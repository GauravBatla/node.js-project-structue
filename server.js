const express = require('express')
const {createConnction} = require('./src/config/db.con')
createConnction().then((res)=>{  
    console.log(res);
}).catch((err)=>{
    console.log(err);
})
const routes = require('./src/routes/mainRoutes')
const app = express()
// app.use(express.json())
app.use('/', routes)


app.listen(3000, (err) => {
    if (err) throw err;
    console.log(`server created `);
})