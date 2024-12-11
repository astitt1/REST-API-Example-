const express = require('express')
const app = express()
const port = 3000

const users = require('./data/users')
const posts = require('./data/posts')


app.get('/', (req, res)=>{
    res.send('Work in progress!')
})

//get all users 
app.get('/api/users', (req, res)=>{
    res.json(users)
})







app.listen(port, ()=>{
    console.log(`server listening on port: ${port}`)
})