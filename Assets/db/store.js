const fs = require('fs');
const { get } = require('http');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFileAsync('../Assets/Develop/db/db.json', "utf8")
    }
    
    write(note){
        return writeFileAsync('../Assets/Develop/db/db.json', JSON.stringify(note))
    }

getNotes(){
    return this.read().then((notes) => {
        console.log(notes)
    })
}






}


module.exports = new Store();