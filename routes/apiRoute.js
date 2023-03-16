const router = require('express').Router();
const path = require('path');
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const note = require('../db/db.json');


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

module.exports = router;