let personToInvite = ["Adeel", "Zain", "Abdul Bari"]
let invite = "You guys are invited to my place for dinner tomorrow evening."

console.log(`${personToInvite[1]} can't make it to come for the dinner`);

personToInvite[1] = "Zaheer"

personToInvite.forEach(person =>{
    console.log(person + " " + invite);
})
console.log("Guys! I am inviting more people at the dinner as I have found a bigger dinnner table.")