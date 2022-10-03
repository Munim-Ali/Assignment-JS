let personToInvite = ["Adeel", "Zain", "Abdul Bari"]
let invite = "You guys are invited to my place for dinner tomorrow evening."

personToInvite.unshift("Sadiq")
personToInvite.splice(2, 0, "Ali")
personToInvite.push("Waleed")

personToInvite.forEach(person =>{
    console.log(person + " " + invite);
})

console.log("\n Sorry guys i can invite on two people right now!\n")

let removedPerson1 = personToInvite.pop()
console.log(`Sorry ${removedPerson1}, I can't invite you to dinner`)
let removedPerson2 = personToInvite.pop()
console.log(`Sorry ${removedPerson2}, I can't invite you to dinner`)
let removedPerson3 = personToInvite.pop()
console.log(`Sorry ${removedPerson3}, I can't invite you to dinner`)
let removedPerson4 = personToInvite.pop()
console.log(`Sorry ${removedPerson4}, I can't invite you to dinner`)

personToInvite.forEach(person =>{
    console.log(person + " " + invite);
})

while(personToInvite.length > 0){
    personToInvite.pop()
  
}
console.log(personToInvite)

