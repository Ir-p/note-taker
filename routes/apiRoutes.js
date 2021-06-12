// LOAD DATA
// We are linking our routes to a series of "data" sources.

const db = require('../assets/db/db.json');
const store = require('../assets/db/store.js')
// ROUTING


module.exports = (app) => {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------
    
  app.get('/api/notes', (req, res) => {
     store.getNotes().then((notes) => {
         return res.json(notes)
     }).catch((err) => res.status(500).json(err))
  });



  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

//   app.post('/api/notes', (req, res) => {
//     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
//     // It will do this by sending out the value "true" have a table
//     // req.body is available since we're using the body parsing middleware
    
//       db.push(req.body);
//     })

//   // I added this below code so you could clear out the table while working with the functionality.
//   // Don"t worry about it!

//   app.delete('/api/notes/:id', (req, res) => {
//     // Empty out the arrays of data
//   })
}
