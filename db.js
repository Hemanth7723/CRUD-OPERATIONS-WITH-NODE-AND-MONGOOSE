const mongoose = require('mongoose')


const dbUri='mongodb+srv://admin:9874@cluster0.sd3utgv.mongodb.net/library_db?retryWrites=true&w=majority'

module.exports = () => {
    return mongoose.connect(dbUri, 
        {
            useNewUrlParser: true, useUnifiedTopology: true
        })
}