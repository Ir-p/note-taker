// LOAD DATA
// We are linking our routes to a series of "data" sources.

const db = require('../db/db.json');
const store = require('../db/store.js')
// ROUTING


module.exports = (app) => {
 
  //API ROUTES
  // Path to notes
  app.get('/api/notes', (req, res) => {
    res.json(store.read())
  });

  // Post API notes
  app.post("/api/notes", (req, res) => {
    const id = store.write(req.body)
    res.json(id);
  });

}
