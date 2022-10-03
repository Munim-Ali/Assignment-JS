let personName = "syed abdul munim ali"

let lowerCase = personName.toLowerCase();
let upperCase = personName.toUpperCase();

function titleCase(str) {
    return str
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

console.log(`In lower case ${lowerCase}`);
console.log(`In lower case ${upperCase}`);
console.log(`In title case ${titleCase("syed abdul munim ali")}`);
