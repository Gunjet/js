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


const books=[
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
        { title: "1984", author: "George Orwell", year: 1949 },  
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }, 
        { title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", year: 1967 },  
        { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }];

function filterBooksByYear(year){
    let filteredBooks=[];
for(let i; i<books.length; i++){
    const thatBooksYear=books[i]
    if(thatBooksYear>=filterYear){
        filteredBooks.push(books[i]);
    }
   }
   return filteredBooks;
}
// const filteredBooks=[filterBooksByYear(1980)];
// console.log(filteredBooks);