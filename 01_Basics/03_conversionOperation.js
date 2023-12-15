let score = "33abc"

console.log(typeof score);
console.log(typeof (score));



// "33" = 33 (number will be number)
// "33abc" = Nan (will be displayed as not a number)
// true = 1, False = 0
// 1 = true, 0 = false
// "" = true


let valueInNumber  = Number(score)
console.log(typeof valueInNumber);