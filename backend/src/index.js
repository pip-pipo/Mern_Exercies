const express = require('express')
const env = require('dotenv')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
// routes imported
const userRoute = require('./routes/user')
// app initialize
const app = express()

// env variablw
env.config();

// middle ware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// api url prefix api
app.use('/api',userRoute)

// port
const port = process.env.PORT || 2000;

// mongodb connect
// mongodb url mongodb+srv://root:root@cluster0.okgrm.mongodb.net/root?retryWrites=true&w=majority

mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.okgrm.mongodb.net/${process.env.MONGO_DB_DB}?retryWrites=true&w=majority`
    , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("database connected")
    }).catch((e) => {
        console.log(e)
    });

// routes 






// app listen
app.listen(port, () => { console.log(`server is runing on ${port}`) });

