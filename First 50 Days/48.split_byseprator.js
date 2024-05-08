const splitWordsBySeparator = function(words, separator) {
    let arr=[]
    for(let str of words){
        arr.push(...str.split(separator).filter((el)=>el!==""))
    }
    return arr
};

const words = ["","easy","","","problem",""], separator = "$";
console.log(splitWordsBySeparator(words, separator));
