//171. Excel Sheet Column Number
const titleToNumber = function(columnTitle){
    let res=0;
    
    for(let i=0;i<columnTitle.length;i++){
        let numericVal=columnTitle.charCodeAt(i)-"A".charCodeAt(0)+1
        res = res * 26 + numericVal;

    }
    return res
}

console.log(titleToNumber('BA'))