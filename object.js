// const person = {
//     name:"Susan",
//     age: 20,
// familyMembers: ["John", "Justin", "Emma"],
// father: {
//     name: "John",
//     age: 52,
//     status: "married"

//   }
// }
// console.log(person)


// Object with loops
const product1={
    name:"iMac",
    price: 1500
};

const product2={
    name:"iPhone",
    price: 2000
};
const products=[product1,product2]
console.log(products)
console.log(products[1].price)

// for (let i=0; i<products.length; i++){   
//   => i=0; products[0];
//      i=1; products[1];
//      i=2; products[2]
//     console.log(products[i].name);
// }
let totalPrice=0
for(let i; i< products.length; i++){
    totalPrice+=products[i].price;
    // => i=0; products[0].price
}
let avgPrice=totalPrice / products.length;
console.log(totalPrice)



// const books=[
//         { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
//         { title: "1984", author: "George Orwell", year: 1949 },  
//         { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }, 
//         { title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", year: 1967 },  
//         { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }];

// function filterBooksByYear(year){
//     let filteredBooks=[];
// for(let i; i<books.length; i++){
//     const thatBooksYear=books[i]
//     if(thatBooksYear>=filterYear){
//         filteredBooks.push(books[i]);
//     }
//    }
//    return filteredBooks;
// }
// const filteredBooks=[filterBooksByYear(1980)];
// console.log(filteredBooks);