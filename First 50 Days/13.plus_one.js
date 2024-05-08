//one line
const plusOne = function(digits){
    let number = (BigInt(digits.join(''))+1n).toString().split('')
    return number
}   

//traditional way
const _plusOne = function(digits){
 
    for(let i=digits.length-1;i>=0;i--){
        digits[i]++
        if(digits[i]>9){
            digits[i]=0
        }else{
            return digits
        }
    }
    digits.unshift(1)
    return digits
}

const _digits = [9]
console.log(_plusOne(_digits))