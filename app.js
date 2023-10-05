const express = require('express')
const app = express()
const port = 3000
let users = [{name: "Emma", gender: "Male"}, {name: "Solomon", gender: "Male"}];


app.use(express.json());


app.get('/users', (req, res) => {
  res.status(200).json({message: "All users fetched successfully", count: users.length, users})
})

app.post('/create-user', (req, res) => {
  users.push(req.body);
  res.status(201).json({message: "Created a new user successfully", data: req.body})
})

app.put('/update-user/:name', (req, res) => {
  let userIndex = users.findIndex(each => each.name.toLowerCase() === req.params.name.toLowerCase());
  if (userIndex < 0) {
    res.status(400).json({message: "Cannot find the user provided"})    
  } else {
    users[userIndex] = req.body;
    res.status(200).json({message: "Updated user information successfully"})   
  }
})

/**
    ASSIGNMENTS.
  1. Write a patch request to only alter a property of the user profile.
  2. Write a delete request to delete the property of a user profile.
  3. Write 10 differences betwen request body and response body. Those differences, create an endpoint
      to return the data using res.send
**/

app.patch('/second', (req, res) => {
  res.send('Hello World, My second Node Express App!!')
})

app.delete('/second', (req, res) => {
  res.send('Hello World, My second Node Express App!!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

