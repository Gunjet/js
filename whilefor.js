//  let count=0
// while(count<5){
//     console.log("hey");
//     count=count+1;
// }
// for(let count=0;count<5;count++){
//   console.log("hey")
// }


// let count=0
// while(count<5){
//     count=count+1
//     console.log(count);
// }
// for(let count=0;count<5;count++){
//   console.log(count)
// }


// let count=0
// while(count<10){
//     count=count+1
//     console.log(count);
// }
// for(let count=0;count<10;count++){
//   console.log(count)
// }


// let count=0
// while(count<10){
//     console.log("hello");
//     count=count+1
// }
// for(let count=0;count<10;count++){
//   console.log("hello")
// }

// let count=0
// let niilber = 0
// while(count<20){
//     count=count+1
//     niilber += count
//     console.log(niilber);
// }
// for(let count=0, niilber=0; count<20;){
//   count+=1
//   niilber+=count;
//   console.log(niilber);  
// }


// count = 0
// while(count < 20){
//     count += 1
//     if(count % 2 == 1){
//         console.log(count)
//     }
// }
// for(count=0;count<20;count+=1){
//   if(count % 2 == 1){
//     console.log(count)
//   }
// }


// let number=5
// let factorial=1
// while (number > 0){
//     factorial*=number
//     number--
// }
// console.log(factorial)
// for(let number=5,factorial=1; number>0;factorial*=number,number--){
//   console.log(factorial)
// }

// let number=4
// let count=0
// let multiply=0
// while (count<10){
//     count=count+1;
//     multiply=count*number;
//     console.log(number, '*', count, "=", multiply)
// }
// for(let number=4,count=0,multiply=0;count<10;){
//      count+=1
//      multiply=count*number
//      console.log(number, '*', count, "=", multiply)
// }

// let n=461,
// reversed=""
// while(n>0){lastDigit=n%10
//     let lastDigit=n%10;
//     reversed+=lastDigit;
//     n=Math.floor(n/10)
// }
// console.log(reversed)

// let reversed=""
// for(let n=461;n>0;  n=Math.floor(n/10)){
//   let  lastDigit=n%10
//  reversed+=lastDigit

// }
// console.log(reversed) 




// Create a while loop that runs from 1-100
// Every 10 loops, print out: Checkpoint! and the loop number
// On loop 50 print out ONLY: Half way there!
// On the final loop (100) print out ONLY: You made it!
// AFTER the loop is done, print out: All, done!
// let i=1;
// while(i<=100){
//     if(i%100===0){
//         console.log("You made it!")
//     } else if(i%50===0){
//         console.log('Half way there!')
//      } else if(i%10===0){
//         console.log("Checkpoint", i)
//     }
//     i++
// }
// console.log("All done!")

// for(let i=1;i<=100;){
//     if(i%100===0){
//         console.log("You made it!")
//     } else if(i%50===0){
//         console.log('Half way there!')
//      } else if(i%10===0){
//         console.log("Checkpoint", i)
//     }
//     i++
// }
// console.log("All done!")


// 1. Төсвийн хянагч (Budget Tracker)
// Та өдөр тутмын зардлаа хянахыг хүсч байна. Таны төсөв буюу зарцуулах боломжтой мөнгөний хэмжээ $100 байна.
// Ажлын өдрүүдэд (Даваа - Баасан) зардал $10 байх болно.
// Амралтын өдрүүдэд (Бямба, Ням) зардал $25 байх болно.
// Хэрэв  нийт зардал $80-аас илүү, гэхдээ $100-аас бага болвол "Таны нийт зардал 100$ руу ойртож байна шүү" гэж хэвлэ.
// Хэрэв  нийт зардал $100 буюу төсвийн хязгаарт хүрсэн бол: "Та зардлын хязгаарт хүрлээ!" гэж хэвлээд давталтыг зогсоо.
// const budget=100;
// let totalExpense=0, day=1
// while(totalExpense<=budget){
//     let dayExpense=0;
//     if(day<=5){
//         dayExpense+=5;
//     } else if(day>=5 && day <=7){
//         dayExpense+=10;
//     }
//     totalExpense+=dayExpense

//     if(totalExpense>=80 && totalExpense<=100){
//         console.log("Таны нийт зардал 100$ руу ойртож байна шүү")
//     } else if(totalExpense>=100){
//         console.log("Та зардлын хязгаарт хүрлээ!")
//     }
//     day++

//     if(day==7){
//       day=1;
//     }

// }
// console.log(totalExpense)

// let budget=100,
// day=1,
// totalExpense=0;
// let dayExpense=0;
// for(totalExpense;totalExpense<=budget; totalExpense+=dayExpense){
//   if(day<=5){
//       dayExpense=5;
//   } else if(day>=5 && day <=7){
//       dayExpense=10;
//   }

//   if(totalExpense>=80 && totalExpense<=100){
//       console.log("Таны нийт зардал 100$ руу ойртож байна шүү")
//   day++
//   }

//   if(day>=7){
//     day=1;
//   }
// }
// if(totalExpense>=100){
//     console.log("Та зардлын хязгаарт хүрлээ!")
//   }
// console.log(totalExpense)


// 2. Кофе шопын урамшууллын карт (Coffee Shop Punch Card)
// Кофе шоп урамшууллын карттай бөгөөд 10 аяга кофе авсны дараа үнэгүй кофе авах боломжтой.
// Худалдан авсан кофены тоогоор ажиллах давталт үүсгээрэй.
// Худалдан авалт бүрт “Та … дахь кофегоо худалдан авлаа”  гэж хэвлэ.
// 3 дахь удаагийн худалдан авалт бүрийн дараа  "Танд үнэгүй бялуу бэлэглжу байна” гэж хэвлэ.
// 10 дахь худалдан авалтанд "Баяр хүргэе! Та үнэгүй кофе авлаа!" гэж хэвлэ.
// Давталт дууссаны дараа: "Урамшууллын карт дууслаа!" гэж хэвлэ.
// let coffee=0  
// while(coffee<=9){
//     coffee++
//     console.log("Та",coffee, "дахь кофегоо худалдан авлаа");
// if(coffee%3==0){
//     console.log("Танд үнэгүй бялуу бэлэглэж байна")
// } else if(coffee==10){
//     console.log("Баяр хүргэе! Та үнэгүй кофе авлаа!")
// }
// }
// console.log("Урамшууллын карт дууслаа!")

// for(let coffee=0;coffee<=9; coffee++){
//   coffee++
//   console.log("Та",coffee, "дахь кофегоо худалдан авлаа");
// if(coffee%3==0){
//   console.log("Танд үнэгүй бялуу бэлэглэж байна")
// } else if(coffee==10){
//   console.log("Баяр хүргэе! Та үнэгүй кофе авлаа!")
// }
// console.log("Урамшууллын карт дууслаа!")
// }

// let pattern ='';
// let i=0;
// while(i<9){
//   i+=1;
//   pattern+="*";
//   console.log(pattern);
// }
// for(let pattern ='',i=0;i<9;){
//   i+=1;
//   pattern+="*";
//   console.log(pattern);

// }

// 21. 3-37 хүртэлх тоонуудаас 5д хуваагддаг 
// тоонуудыг дарааллуулан хэвлэ
// let i=0
// while(i<37){
//   i+=1
// if(i%5===0){
//   console.log(i)
// }
// }
// for(let i=0;i<37;){
//   i+=1
// if(i%5===0){
//   console.log(i)
// }
// }



  // 26. N тоо өгөгдөнө, Хэрэв N тоо тэгш бол 2-т хуваа эсвэл
  // сондгой бол 3 аар үржиж 1 ийг нэм. 
  // Дээрх үйлдлийг N нь 1 тэй тэнцүү болох хүртэл 
  // хэдэн удаа давтах вэ.
// let n=4, a=0
// while(n!=1){
//   if(n%2==0){
//     n=n/2;
//     a++
//   }else{
//     n=((n*3)+1)
//     a++
//   }
// } 
// console.log(a)
// for(let n=4, a=0;n!=1;){
//     if(n%2==0){
//       n=n/2;
//       a++
//     }else{
//       n=((n*3)+1)
//       a++
//     }
//   }
//   console.log(a)