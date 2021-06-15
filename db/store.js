const notesJSON = require("./db.json");
const { writeFileSync } = require('fs');
const path = require("path");
// Store notes
class Store {
    read() {
        return notesJSON;
    }
    
    write(note){
        const length = notesJSON.push(note);
        
        writeFileSync(path.join(__dirname, "db.json"), JSON.stringify(notesJSON));
        return length -1;
    }

}



module.exports = new Store();