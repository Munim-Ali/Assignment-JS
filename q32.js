let currentUser = ["Eric", "David", "Admin", "Mark", "Bob"]
let newUser = ["Eric", "Chan", "Tim", "Mark", "Bishop"]
let i=0

let validateUser = (currentUser, newUser) =>{
    for (let i=0; i < newUser.length; i++){
        (currentUser[i] == newUser[i]) ? console.log("username exist") : console.log("username available")
    }
}

console.log(validateUser(currentUser, newUser))

