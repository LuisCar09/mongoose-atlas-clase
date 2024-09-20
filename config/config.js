const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const dbConnection = async()=> {
    try {
        console.log(process.env.URI);
        await mongoose.connect(process.env.URI)
        console.log('Data base is working on.');
        
        
    } catch (error) {
        console.log(error.message);
        throw new Error('Error starting data base')
    }
}

module.exports = {
    dbConnection
}