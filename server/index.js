require('dotenv').config()
const express = require('express')
const app = express()

const {SERVER_PORT} = process.env

app.listen(SERVER_PORT, console.log(`bingpot on port ${SERVER_PORT}`))

