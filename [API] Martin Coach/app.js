
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const postsRoute = require('./routes/user_router');

app.use(express.json());
app.use("/users",postsRoute);

module.exports = app;