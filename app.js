const read = require('readline-sync')
const fs = require('fs')

while (true) {
    console.log("1. Add User");
    console.log("2. Update User");
    console.log("3. Delete User");
    console.log("4. Search User");
    console.log("5. Exit");

    let option = read.question('Please select an option: ');
    switch (option) {
        case "1":
            addUser();
            break;
        case "2":
            updateUser();
            break;
        case "3":
            console.log("Delete User Selected");
            break;
        case "4":
            console.log("Search User Selected");
            break;
        case "5":
            process.exit(0);
            break;
        default:
            console.log("Invalid option");
    }
}

function updateUser() {
    let userName = read.question('Enter the username: ');
    var fileName = getFileName(userName);

    var userText = fs.readFileSync(fileName, 'utf8');
    var user = JSON.parse(userText);

    console.log("Enter the details or leave it blank");
    let name = read.question("Name: ");
    let email = read.question("Email: ");
    let phone = read.question("Phone: ");

    user.name = name == "" ? user.name : name;
    user.email = email == "" ? user.email : email;
    user.phone = phone == "" ? user.phone : phone;

    fs.writeFileSync(fileName, JSON.stringify(user));
    console.log("User updated successfully 👍");
}

function addUser() {
    console.log("Add User Selected");
    var user = {
        name: null,
        username: null,
        email: null,
        phone: null
    };
    user.name = read.question("Name: ");
    user.username = read.question("Username: ")
        .toLowerCase();
    user.email = read.question("Email: ");
    user.phone = read.question("Phone: ");
    
    let fileName = getFileName(user.username);
    var json = JSON.stringify(user);
    fs.writeFileSync(fileName, json);
}


function getFileName(userName){
    return `data/${userName}.json`;
}