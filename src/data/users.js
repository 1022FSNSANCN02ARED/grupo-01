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

    
    saveUserEdited(user) {
        let users = this.findAll();
        const userid = user.id;
        //Se busca en la lista de usuarios el usuario que estamos editando
        for (let i = 0; i < users.length; i++) {
            const element = users[i];
            if (element.id == userid) {
                //Como en en user no están los datos de password ni credencial 
                //debemos cargarlos.
                user.password=element.password;
                user.credencial=element.credencial;
                users[i] = user;
            }
        }
        const usersFileContent = JSON.stringify(users, null, 4);
        fs.writeFileSync(userFilePath, usersFileContent, "utf-8");
    }, 
    saveUserEditedAdmin(user) {
        let users = this.findAll();
        const userid = user.id;
        //Se busca en la lista de usuarios el usuario que estamos editando
        for (let i = 0; i < users.length; i++) {
            const element = users[i];
            if (element.id == userid) {
                //Como en en user no están los datos de password ni credencial 
                //debemos cargarlos.
                user.password=element.password;
                users[i] = user;
            }
        }
        const usersFileContent = JSON.stringify(users, null, 4);
        fs.writeFileSync(userFilePath, usersFileContent, "utf-8");
    },



};