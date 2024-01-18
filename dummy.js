


let arr=[7,1,9,1,3,1,6,2,0,1,9];
let arr1=[],obj={};

for(let num of arr){
    if(!obj[num]){
        obj[num]=1
    }else if(obj[num]===1){
        obj[num]++
        arr1.push(num)
    } 
}

console.log(arr1)