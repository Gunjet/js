// const numbers=[2,4,6,8]

// function func(num){
//     return num**2
// }
// const newArr=numbers.map(func)
// console.log(newArr)


// const n=[81828384, 91929394]
// const newArr=n.map(func)

// function func(num){
//     return Math.floor(num / 10000)
// } 

// console.log(newArr)

let array=[-100, -200, 10, -10, 0, 20, 30, -3];

function myFilter(currentValue, index, originalArray){
    return currentValue>0;
}

const numberByFilter=array.filter(myFilter);
const numberByFind=array.find(myFilter);
const numberByFindIndex=array.findIndex(myFilter);

console.log(numberByFilter);
console.log(numberByFind);
