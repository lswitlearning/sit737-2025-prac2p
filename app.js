const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to My Website!</h1><p>This is a simple page created using Node.js and Express.</p>');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});