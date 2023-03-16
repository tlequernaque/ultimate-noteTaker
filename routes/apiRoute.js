const router = require('express').Router();
const path = require('path');
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const note = require('../db/db.json');


router.get('./notes', (req, res) => {
    const dataNotes = fs.readFileSync(path.join(__dirname, './db/db.json'), "utf-8");
    const parseNotes = JSON.parse(dataNotes);
    res.json(parseNotes);
});

router.post('./notes', (req, res) => {
    const dataNotes = fs.readFileSync(path.join(__dirname, '../db/db.json'), "utf-8");
    const parseNotes = JSON.parse(dataNotes);
    req.body.id = uuidv4()
    parseNotes.push(req.body);

    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(parseNotes), "utf-8");
    res.json("You have added a note!");
});

router.delete('./notes/:id', (req, res) => {
    for (let i = 0; i < note.length; i++) {
        if (note[i].id === req.params.id) {
            note.splice(i, 1);
        }
    }
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(note, null, 2)
    )
    res.json(note);
});

module.exports = router;