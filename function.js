// Level: easy
// 4.
// function calculateProblems(count){
//    let totalHour = count*2
//    console.log(" i study for "+ totalHour + " hours to solve " + count + "  problems")
// }

// calculateProblems(5)
// calculateProblems(9)

// 5.
// function printFavoriteFood(name,food){
//     console.log(name, "loves to eat", food)
// }
// printFavoriteFood("Sara", "pizza")

// 4.
// function printWeather(cityName, weather){
//     console.log(cityName, "hotod",weather,"baina" )
// }
// printWeather("Chicago", "cold")

// 5.
// function printBookDetails(title, author, yearPublished){
//     console.log(author,"wrote",title,"in", yearPublished)
// }
// printBookDetails("Harry Potter", "J.K. Rowling", "1997")

// 6.
// function calculateArea(width, height){
// area=width*height
//     console.log("Area:"+area)
// }
// calculateArea(10,20)

// 7.
// function calculateVolume(width,height,depth){
//     area=width*height*depth
//     console.log("Volume:",area)
// }
// calculateVolume(10,20,30)

// 8.
// function printTicketInfo(eventName,ticketPrice,discount){
//     console.log(eventName,"iin tasalbar",ticketPrice,"tugruguus",discount,"bolj hymdarlaa")
// }
// printTicketInfo("Pinecone",20000,15000)



// Level:medium
// 1.
// function findDigitCount(number,digit){
//     // console.log(number,'have',digit,'digits')
// }
// findDigitCount()


// 2
// function numbers(n){
//     console.log(n)
// }
// numbers(1)
// numbers(12)
// numbers(123)
// numbers(1234)
// numbers(12345)



// Level:upper
// 1
// let =[3,8,1,3,9,7,9,1,4,6]
// function findPeak(orgil,n){
//     console.log("orgil",n,orgil)
// }
// findPeak("397",1)
// findPeak("791",2)
// function findBottom(yrool,n){
//     console.log("yrool",n,yrool)
// }
// findBottom("813",1)
// findBottom("914",2)

// function findPeakBottom(orgil,yrool){
//     console.log()
// }

let arr=[3,8,1,3,9,7,9,1,4,6]
function findPeak() {
    let orgil=0;
    let yrool=0;
    for(let i=1;i<arr.length-1;i++) {
        if(arr[i]<arr[i+1] && arr[i+1]> arr[i+2]){
            orgil++;
        }
        if(arr[i]>arr[i+1] && arr[i+1]<arr[i+2]){
            yrool++;
        }
    }
    console.log(orgil,yrool)
}
findPeak();