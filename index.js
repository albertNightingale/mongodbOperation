require('dotenv').config();

const mongoose = require('mongoose');
const {seedingDB} = require('./action/databaseSeeding');

const connectInfo = process.env.DB_CONNECTION_LINK;
const connectConfig = { useNewUrlParser: true, useUnifiedTopology: true };

////////// DB Setup
mongoose.connect(connectInfo, connectConfig)
    .then(() => console.log('DB Connected!'))
    .catch(err => console.log("DB Connection Error: " + err.message));

seedingDB();

