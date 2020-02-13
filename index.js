function number() {
    let sum = 1
    let number = [1, 2, 3, 4, 5]
    for (let sum = 0; sum < number.length; sum++) {
        sum += number[sum]
        return(sum)
        // debugger
    }
}

console.log(number)
console.log(sum)


// function myfun Math.max(a, b) {
//   if (a > b) {
//     return (a);
//   } else {
//     return (b);
//   }
// }

// console.log(Math.max(12, 9));