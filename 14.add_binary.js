//one line
const _addBinary = function(a, b){    
    return (BigInt("0b"+a)+BigInt("0b"+b)).toString(2)     
}

//traditional approach 
const addBinary = function(a, b){
    let dec1=0n;
    let dec2=0n
    let j=a.length-1;
    let l=b.length-1;

    for(let i=0;i<a.length ;i++){        
        if(a[i]!==0){
            dec1+=BigInt(a[i])*(2n**BigInt(j))
        }
        j--
    }

    for(let k=0;k< b.length ;k++){
        if(b[k]!==0){
            dec2+=BigInt(b[k])*(2n**BigInt(l))
        }
        l--
    }

    return (dec1+dec2).toString(2)
}


const a='100'
const b='1'
console.log(addBinary(a, b))