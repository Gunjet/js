// const numbers=[2,4,6,8]

// function func(num){
//     return num**2
// }
// const newArr=numbers.map(func)
// console.log(newArr)


const n=[81828384, 91929394]
const newArr=n.map(func)

function func(num){
    return Math.floor(num / 10000)
} 

console.log(newArr)