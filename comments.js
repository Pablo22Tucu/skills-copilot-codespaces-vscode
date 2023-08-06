// Create web server
const express = require('express');
const app = express();
// Get port from environment and store in Express.
const port = process.env.PORT || 3000;
// Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = process.env.MONGODB_URI || 'mongodb://localhost:27017/comments';
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// Set up bodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Set up routes
const index = require('./routes/index');
const comment = require('./routes/comment');
app.use('/', index);
app.use('/comment', comment);
// Start listening
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
