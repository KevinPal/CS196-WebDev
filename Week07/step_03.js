
//  Week 06 Express: Basic Routing
//  Step 03

//  Import the express library
const express = require('express')

//  Create an instance of express
const app = express()

//  Declare a port to run on
const port = 3000

//  Declare a route
app.get('/', (req, res) => res.send('Hello World!'))

//  Express implements HTTP request methods
app.post('/',  (req, res) => {
  res.send('Got a POST request')
})

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})

//  Start Express Web Server i.e. start listing on the port you defined
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
