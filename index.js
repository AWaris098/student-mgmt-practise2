const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routers/courses.js')

require('./db/mongoose')

const  app = express()


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT , ()=> {
    console.log(`Port listning up port on ${PORT}`)
})