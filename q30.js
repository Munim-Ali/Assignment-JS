let users = ["Eric", "David", "Admin", "Mark", "Bob"]
let loggedinUser = "mark"
users.forEach(user =>{
    (user == "Admin") ? console.log("Hello Admin, would you like to see a status report?") : console.log(`Hello ${user}, thank you for logging in again.`)
})