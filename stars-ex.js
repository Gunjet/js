// 1
// const n=5
// let result="";
// for(k=0; k<n; k++){
//     let i=0;
//     while(i<n){
//         result+="* "
//         i++;
//     }
//     result+="\n";
// }
// console.log(result)

// 2
// const n=5
// let result="";
// for(k=0; k<n; k++){
//     let i=0;
//     while(i<k + 1){
//         result+="* "
//         i++;
//     }
//     result+="\n";
// }
// console.log(result)

// 3
// const n=5
// let result="";
// for(k=0; k<n; k++){
//     let i=0;
//     for(let j=0; j<n-k-1; j++){
//         result+=" "
//     }
//     while(i<k+1){
//         result+="* "
//         i++
//     }
//     result+="\n";
// }
// console.log(result)

// 4
// const n=5
// let result="";
// for(k=0; k<n; k++){
//     let i=0;
//     for(let j=0; j<n-k-1; j++){
//         result+=" "
//     }
//     while(i<k+1){ 
//         if(i==0 || i==k || k==n-1 ){
//              result+="* "
//         }
//         else { result+="  "}
//         i++
//     }
//     result+="\n";
// }
// console.log(result)



// 5. 
const n=5
let result="";
for(k=0; k<n; k++){
    let i=0;
    for(let j=0; j<n-k-1; j++){
        result+=" "
    }
    while(i<k+1){ 
        if(i==0 || i==k ){
             result+="* "
        }
        else { result+="  "}
        i++
    }
    result+="\n";
}
for(k=n-2; k>=0; k--){
    let i=0;
    for(let j=0; j<n-k-1; j++){
        result+=" "
    }
    while(i<k+1){ 
        if(i==0 || i==k ){
             result+="* "
        }
        else { result+="  "}
        i++
    }
    result+="\n";
}
console.log(result)

