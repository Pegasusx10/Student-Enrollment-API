require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const studentRouter = require('./routes/students')
const studentRoutes = require('./routes/students')
const connection = require('./config/dbConnection')
const db = mongoose.connection
const PORT = 5000
const dotenv = require("dotenv")

dotenv.config()

db.on('error', (error) => console.error(error))

app.use(express.json())

app.use('/api/students', studentRouter)
app.use('/api/student', studentRoutes)

app.listen(PORT, () => console.log('Server Started'))


