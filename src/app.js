const express = require("express")
const app = express()
const userRouter = require('../routes/users')
const db = require('../db/connection')

app.use('/users', userRouter)

db.sync()
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((error) => {
    console.error('Error synchronizing the database:', error);
  });

module.exports = app;