//find()
//filter()
//map()
//reduce()
const programmers = ['Milton', 'Brenda', 'Martin', 'Martin','David', 'Benson'];
let findingProgrammer1 = programmers.filter(findProgrammer);
function findProgrammer(programmer) {
    if(programmer === 'Martin') {
        return programmer;
    }
}
let findingProgrammer = parameter => { return };

let findingProgrammer2 = programmers.filter((programmer) => {
    if(programmer === 'Martin'){
        return programmer;
    }
});

let findingProgrammer3 = programmers.filter(programmer => programmer === 'Martin');


// console.log(findingProgrammer);
// for(let i = 0; i< arrayProgrammers.length; i++) {
//     console.log(arrayProgrammers[i]);
// }
// let i =0
// // console.log(i);
// while(i<arrayProgrammers.length){
//     console.log(i)
//     //console.log(arrayProgrammers[i]);
//     i+=2;
// }






const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let multiplyBy2One = numbers.map(multiplier);
// 1 *[numbers] * 2
function multiplier(number) {
    return number * 2;    
}

let multiplyEvenBy2Two = numbers.filter(number => number % 2 === 1).map(number => number * 2);

// console.log(multiplyEvenBy2Two)

//(array)*2
//elem in array * 2


const tutorials = [
    "what does the this keyword mean?",//['what', 'does', 'the', 'this', 'keyword', 'mean?']
    "What is the Constructor OO pattern?",//W + hat
    "implementing Blockchain Web API",
    "The Test Driven Development Workflow",
    "What is NaN and how Can we Check for it",
    "What is the difference between stopPropagation and preventDefault?",
    "Immutable State and Pure Functions",
    "what is the difference between == and ===?",
    "what is the difference between event capturing and bubbling?",
    "what is JSONP?",
  ];

let titleCased1 = tutorials.map(titleCasing);
function titleCasing(tutorial) {
    let wordArray = tutorial.split(" ");
    for(let i = 0; i<wordArray.length; i++) {
        wordArray[i] = wordArray[i].charAt().toUpperCase() + wordArray[i].slice(1);
    }
    return wordArray.join(" ");
}
// console.log(titleCased1);

let titleCased2 = tutorials.map(tutorial => {
    let wordArray = tutorial.split(" ");
    for(let i = 0; i<wordArray.length; i++) {
        wordArray[i] = wordArray[i][0].toUpperCase() + wordArray[i].slice(1);
    }
    return wordArray.join(" ");
});
// console.log(titleCased2);
// titleCasing();

const numbersReduced = [1, 4, 5, 6];
const reduceNumbers = numbersReduced.reduce(getSum);

function getSum(total, num) {
  return total + num;
}
console.log(reduceNumbers);



