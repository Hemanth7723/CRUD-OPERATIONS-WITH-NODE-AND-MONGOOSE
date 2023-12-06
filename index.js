const express = require('express')
const bodyParser = require('body-parser')

//local imports
const connectDb = require('./db.js')
const BookRoutes = require('./controllers/Books.controller')
const { errorHandler } = require('./middlewares')

const app = express()

//middleware
app.use(bodyParser.json())
app.use('/api/Book',BookRoutes)
app.use(errorHandler)

connectDb()
    .then(() => {
        console.log('db connection succeeded.')
        app.listen(3000,
            () => console.log('server started at 3000.'))
    })
    .catch(err => console.log(err))