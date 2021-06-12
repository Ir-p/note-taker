// DEPENDENCIES
// We need to include the path package to get the correct file path for our html

const path = require('path');

// ROUTING

module.exports = (app) => {
  // html routes
  app.get("notes", (req, res) => res.sendFile(path.join(__dirname, "public/notes.hml")));
  // If no matching route is found return "404"
  app.get("*", (req, res) => res.send("404"));
};
