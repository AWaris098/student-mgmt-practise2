const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routers/courses.js')

require('./db/mongoose')

const  app = express()


app.use(router)
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
const PORT = process.env.PORT || 3000

app.listen(PORT , ()=> {
    console.log(`Port listning up port on ${PORT}`)
})