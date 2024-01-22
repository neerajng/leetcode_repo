// let arr=[7,1,9,1,3,1,6,2,0,1,9];
// let arr1=[],obj={};

// for(let num of arr){
//     if(!obj[num]){
//         obj[num]=1
//     }else if(obj[num]===1){
//         obj[num]++
//         arr1.push(num)
//     } 
// }

// console.log(arr1)

let arr=[]
function numberRange(sn,en){
    arr.push(sn)
    if(sn===en) {
        return arr
    }        
    return numberRange(sn+1, en)
}

console.log(numberRange(12,20))