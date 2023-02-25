const fs = require("fs");
const path = require("path");

const userFilePath = path.join(__dirname, "userDataBase.json");

// Funcion de listar usuarios


module.exports = {
    findAll() {
        const userFileContent = fs.readFileSync(userFilePath, "utf-8");
        const users = JSON.parse(userFileContent);
        return users;
    },
    saveUser(user) {
        const users = this.findAll();
        users.push(user);
        const userFileContent = JSON.stringify(users, null, 4);
        fs.writeFileSync(userFilePath, userFileContent, "utf-8");
    },
    findById(id) {
        return this.findAll().find((p) => p.id == id);
    },
    findByemail(email) {
        return this.findAll().find((p) => p.email == email);
    },



};