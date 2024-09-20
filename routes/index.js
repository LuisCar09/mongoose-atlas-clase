const express = require('express')
const router = express.Router()
const userRoutes = require('./users')

router.get('/',(req,res) =>{
    res.send('<h1>Hola mundo!</h1>')
})


router.use('/',userRoutes) //Esta ruta es llegar a /created metodo post

router.use((req,res)=> {
    res.status(404).send('Page not found')
})

module.exports = router