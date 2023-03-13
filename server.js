const express = require('express');
const fs = require("fs");
const path = require('path');
const PORT = process.env.port || 3001;
const api = require('./public/assets/js/index');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);


app.get('/api/notes', (req, res) => {
    res.status(200).json(reviews);
});





app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
