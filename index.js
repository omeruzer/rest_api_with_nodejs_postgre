const express = require('express');
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser')

require('dotenv/config')

app.use(cors())
app.use(bodyParser.json())

//routes
const student = require('./routes/students')

app.use('/api/student', student)

app.listen(process.env.PORT, () => {
    console.log(`Listening to ${process.env.PORT} port`);
})