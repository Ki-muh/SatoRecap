let amount  = 1000;
let withdrawalAmount = 7000

// function transactAmount(x) {
//     if(amount> x) {
//         return amount - x;
//     }
// }
let transactAmount = x =>   {
    let amountTransacted = (amount > x) ? amount -x : "cannot transact";
    return amountTransacted;
}
console.log(transactAmount(withdrawalAmount));

function printName() {
    
}

