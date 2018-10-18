
//  Week 06 Express: Basic Routing
//  Step 02

//  Import the express library
const express = require('express')

//  Create an instance of express
const app = express()

//  Declare a port to run on
const port = 3000

//  Declare a route
app.get('/', (req, res) => res.send('Hello World!'))

//  Declaring another route
app.get('/about', (req, res) => res.send('About'))

//  Start Express Web Server i.e. start listing on the port you defined
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
