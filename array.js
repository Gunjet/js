// let ages=[20,32,48,16];
// console.log(ages)

// const age32=ages[1];
// ages[2]=16;
// console.log(ages)

// // remove 0 index
// ages.shift();
// console.log(ages);

// // remove 0 index
// ages.pop();
// console.log(ages);

// // insert last
// ages.push(900);
// console.group(ages);

// const array2=ages.slice(1,3);
// console.log("--", array2);
// console.log("----", array2[10000]);

// let newArray=[]
// let subArray=["Sub", "Sub"]
// for(let i=1;i<=4;i++){
//     newArray.push(i);
// }

// newArray.push("Hello")
// newArray.push(true)
// newArray.push(undefined)
// newArray.push("*")
// newArray.push([1,2,3])
// newArray.push(subArray);

// console.log(newArray)



// 1. favoriteColors гэсэн array үүсгээд 5 дуртай өнгийг оруулна. Дараа нь гурав дахь өнгийг өөрчилж, шинэчилсэн array-ыг хэвлэ.
// let favoriteColors=["blue","green","grey","yellow","pink"];
// favoriteColors[2]="red"
// console.log(favoriteColors)

// 2. levelsCompleted гэсэн array үүсгээд  boolean утгууд оруул.
// Хамгийн төгсгөлд нь шинээр true гэсэн утга өгч,  шинэчилсэн array-ыг хэвлэ.
// let levelsCompleted=[false];
// levelsCompleted.push(true);
// console.log(levelsCompleted)

// 3. destinations array үүсгээд очихыг хүссэн 5 газрыг бич. Эхний газрыг устгаад шинэчилсэн array-ыг хэвлэ.
//  Дараа нь хамгийн эхэнд нь “New York” гэсэн элемент нэмээд  шинэчилсэн array-ыг хэвлэ.
// let destinations=["a","b","c","d","e"]
// destinations.shift()
// console.log(destinations)
// destinations[0]=["NY"]
// console.log(destinations)

// 4. ages гэсэн array зарлаад 18, 21, 22, 20, 23, 36, 79, 
// гэсэн утгуудыг оноож тус array-д байгаа бүх тоог 5-аар нэмэгдүүл. шинэчилсэн array-ыг хэвлэ.
// option1
// let ages=[18, 21, 22, 20, 23, 36, 79]
// sum=ages.map(x=>x+=5)
// console.log(sum)
// option2
// let ages=[18, 21, 22, 20, 23, 36, 79]
// let index=0
// while(index <=6){              or index < ages.length
//     ages[index]= ages[index]+5
//     index++;
// }
// console.log(ages)

// 5. numbers гэсэн array зарлаад 15ш тоо оруул.
// Дээрх array доторх тоонуудын нийлбэрийг ол.
// Дээрх аrray - ийн хамгийн их тоог ол.
// Дээрх аrray - ийн хамгийн бага тоог ол.
// Дээрх аrray - ийн эхэнд дурын 1 тоог нэм.
// Дээрх аrray - ийн төгсгөлд дурын 1 тоог нэм.
// Дээрх array доторх тоонуудын тэгш болон сондгой тоо тус тус хэд байгааг ол.
let numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let sum=0;
for(let i=0; i<numbers.length; i++){
    sum=sum+numbers[i];
}
console.log(sum);

let max=numbers[0]
for(let i=0; i<numbers.length; i++){
    if(numbers[i]>max){
        max=numbers[i]
    }
}
console.log(max);


let min=numbers[0]
for(let i=0; i<numbers.length; i++){
    if(numbers[i]<min){
        min=numbers[i]
    }
}
console.log(min);

numbers.unshift(8997);
numbers.push(567);
console.log(numbers)

let even=0;
odd=0;
for(let i=0; i<numbers.length;i++){
    if(numbers[i]%2===0){
        even++
    } else{
        odd++;
    }
}
console.log(odd, even)