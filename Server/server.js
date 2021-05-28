const express = require('express');
const path = require('path');
const cors = require('cors');


const port = 5000;

const app = express();

app.use(express.static(path.join(__dirname, '/../Client/')));
app.use(cors())

app.get(['/', '/p/*'], (req, res) => {
  console.log('Made It')
  res.sendFile(path.join(__dirname, '/../Client/index.html'));
});

app.get('/test', (req, res) =>{
  console.log('Test')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});