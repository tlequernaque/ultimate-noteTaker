const express = require('express');
const fs = require("fs");
const path = require('path');
const PORT = process.env.port || 3001;
const api = require('./public/assets/js/index');
const app = express();
const { v4: uuidv4 } = require('uuid');

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
    const dataNotes = fs.readFileSync(path.join(__dirname, './db/db.json'), "utf-8");
    const parseNotes = JSON.parse(dataNotes);
    res.json(parseNotes);
});

app.post('/api/notes', (req, res) => {
    const dataNotes = fs.readFileSync(path.join(__dirname, './db/db.json'), "utf-8");
    const parseNotes = JSON.parse(dataNotes);
    req.body.id = uuidv4()
    parseNotes.push(req.body);

    fs.writeFileSync(path.join(__dirname, './db/db.json'), JSON.stringify(parseNotes), "utf-8");
    res.json("You have added a note!");
});

// app.delete('/api/notes/:id', (req, res) => {
//     res.send("DELETE Request Called")
// })


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
