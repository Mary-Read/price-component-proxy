const express = require('express');
const path = require('path');

const port = 6000;

const app = express();

app.use(express.static(path.join(__dirname, '/../Client/')))

app.get(['/', '/p/*'], (req, res) => {
  res.sendFile(path.join(__dirname, '/../Client/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});