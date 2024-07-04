 //function addNum(number) {
 // let sum = 0;
//for (let i = 0; i <= number; i++) {
// sum = sum + i;
  //  }
    // return sum;
 //}
 //console.log(addNum(85))

//function addEvenNum(number) {
    
let sum = 0;
    for (let i = 0; i <= number; i=i+2) {
     if (number%2!==0) {
        return console.log('not an even number')
     }
     else{
    sum=sum+i
     }
    }
    return sum;
}
console.log(addEvenNum(12))

