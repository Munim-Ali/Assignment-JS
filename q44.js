function making_sandwich(choices = []) {
    console.log("\nThe following will be included with the sandwich: ")
    for (let choice of choices) {
        console.log(choice)
    }
}
making_sandwich(['lettuce', 'onion', 'tomato', 'honey mustard'])
making_sandwich(['burger', 'ketchup', 'lettuce'])
making_sandwich(['subway', 'lettuce', 'onion', 'tomato'])