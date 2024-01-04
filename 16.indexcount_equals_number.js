const digitCount = function(num) {
    let arr=Array(num.length).fill(0) 
    for (let char of num){
       arr[Number(char)]++ 
    }
    return arr.join('')===num  
};
const _num = '1210'
console.log(digitCount(_num)) 