const express = require('express');
const app = express();
const notesJSON = require("./db/db.json")

const PORT = process.env.PORT || 3000;

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded())

// Serve static 
app.use(express.static('public'));

//API ROUTES
// Path to notes
app.get('../api/notes', (req, res) => {
  console.log("/api/notes");
  res.json(notesJSON)
});

// Post API notes
app.post("/api/notes", (req, res) => {
  notes.push(req.body)
});

// html routes
app.get("notes", (req, res) => res.sendFile(path.join(__dirname, "public/notes.hml")));
app.get("*", (req, res) => res.send("404"));


// LISTENER
app.listen(PORT, () => {
  console.log(`App listening on PORT: http://localhost:${PORT}`);
});