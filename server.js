const express = require('express');
const app = express();
const notesJSON = require("./db/db.json");
const store = require('./db/store');

const PORT = process.env.PORT || 3000;

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded())

// Serve static 
app.use(express.static('public'));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// LISTENER
app.listen(PORT, () => {
  console.log(`App listening on PORT: http://localhost:${PORT}`);
});