let placesToVisit = ["baku", "turkey", "skardu", "miami", "paris"]
console.log(placesToVisit)

//Alphabetical Order
let sortedArray = [...placesToVisit].sort();
console.log(sortedArray) //sorted alphabetically
console.log(placesToVisit) //array in original order

//Reverse Alphabetical order
let reverseAlphabetical = [...placesToVisit].sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
console.log(reverseAlphabetical) //sorted reverse alphabetically
console.log(placesToVisit) //array in original order

//Reverse Order of array

let reverseOrder = [...placesToVisit].reverse()
console.log(reverseOrder)
console.log(placesToVisit)

//Reverse the reversed array again

let reversedBack = reverseOrder.reverse()
console.log(reversedBack)

//Sort array in stored in alphabetical order
let newSort = sortedArray.sort()
console.log(newSort)

//Sort array in stored in reverse alphabetical order
let newReverseSort = reverseAlphabetical.sort()
console.log(newReverseSort)