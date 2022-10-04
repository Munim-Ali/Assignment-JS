let numbers = [11, 12, 13, 14, 15, 16, 17, 18, 19];
numbers.forEach(num => {
    if (num == 11) {
        console.log(num + 'st');
    } else if (num == 12) {
        console.log(num + 'nd');
    } else if (num == 13) {
        console.log(num + 'rd');
    } else if (num > 9) {
        console.log(`${num}th`);
    }

})