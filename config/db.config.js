const mongoose = require('mongoose');

const MONGO_USERNAME = 'sunitha';
const MONGO_PASSWORD = 'nivedan1234';
const MONGO_HOSTNAME = 'cluster0.8qogr.mongodb.net';
const MONGO_PORT = '27017';
const MONGO_DB = 'devicemangement';

const url = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, { useFindAndModify: false, useNewUrlParser: true,useUnifiedTopology: true});