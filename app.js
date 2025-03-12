// 1. Import the Express framework
const express = require('express');
// 2. Create an instance of an Express application
const app = express();

// 3. Define the server port
const port = 3000;

// 4. Set up a route for the homepage
app.get('/', (req, res) => {
  res.send('<h1>Welcome to My Website!</h1><p>This is a simple page created using Node.js and Express.</p>');
});

//5. Start the server and make it listen on the defined port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});