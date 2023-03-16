const express = require('express');

const path = require('path');
const PORT = process.env.port || 3001;
// const api = require('./public/assets/js/index');
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));




app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
