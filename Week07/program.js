
//  Week 06 Express: Basic Routing
//  Step 04

//  Import the express library
const express = require('express')

//  Create an instance of express
const app = express()

//  Declare a port to run on
const port = 3000

app.get('/users/:page', function (req, res) {
  switch(req.params.page) {
	case "home": res.send("Home page"); break;
	case "about": res.send("about page"); break;
	case "info": res.send("info page"); break;
	default: res.send("Unable to find " + res.params.page); break;
  }
  res.send(req.params)
})

//  Start Express Web Server i.e. start listing on the port you defined
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
