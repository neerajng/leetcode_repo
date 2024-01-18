const removeTrailingZeros = function(num) {
    num=num.split('')
    for(let i=num.length-1;i>=0;i--){
        if(num[i]==='0'){
            num.pop()
        }else{
            return num.join('')
        }
    }
 };

//one line using regex
const rmvtrlngzro=(s)=>{
    return s.replace(/0+$/g, '')
} 

const s="51230100"
console.log(removeTrailingZeros(s))

console.log(rmvtrlngzro(s))