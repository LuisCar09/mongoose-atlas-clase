const express = require('express')
const dotenv = require('dotenv')
const {dbConnection} = require('./config/config')
const routes = require('./routes/index')

dotenv.config()

const app = express()
const PORT = process.env.PORT ?? 4000 

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

dbConnection()

app.use('/',routes)


app.listen(PORT,() => {
    console.log(`Server listening on port ${PORT}`);
    
})