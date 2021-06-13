const fs = require('fs');
const notesJSON = require("./db.json");

// Store notes
class Store {
    read() {
        return notesJSON;
    }
    
    write(note){
        const length = notesJSON.push(note);
        return length -1;
    }

    getNotes(){
    return this.read().then((notes) => {
        console.log(notes)
    })
    }
}


module.exports = new Store();