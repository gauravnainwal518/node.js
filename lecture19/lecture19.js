//understanding the Routing parms Request and response
//i take this code from chatgpt because instructor code is not working properly in this lecture

const express = require('express');
const app = express();

// Define a route with a parameter `id`
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;

  if (!userId) {
    return res.status(400).send('User ID is required');
  }

  res.send(`User ID: ${userId}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
