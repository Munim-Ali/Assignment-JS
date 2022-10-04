magician_names = ['Tim', 'David', 'Bob']
console.log("Magicians Name.\n");

function show_magicians(n) {
    for (magician of n) {
        console.log(magician)
    }
}

show_magicians(magician_names)
console.log("\nModified List\n");
magician += " the Great"
magician = magician + " the great"

function make_great(list_magicians) {
    for (let i in list_magicians) {
        list_magicians[i] += " the great"
    }
}
make_great(magician_names)
show_magicians(magician_names)