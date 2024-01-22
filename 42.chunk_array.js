//using slice
const _chunk = function(arr, size) {
    let chunks=[], startIdx=0;  
    while(startIdx<arr.length){
        console.log(startIdx, size)
        chunks.push(arr.slice(startIdx,startIdx+size));
        startIdx+=size
    }
    return chunks
}
const _arr = [1,2,3,4,5], _size = 1;
console.log(_chunk(_arr,_size));
//--------------------------------------------------------//

//traditional approach
// const chunk = function(arr, size) {
//     let chunk_arr=[],array=[],count=0;
//     for(let i=0;i<arr.length;i++){
//         if(count<size){
//             count++  
//             chunk_arr.push(arr[i])            
//         }
        
//         if(count===size||i===arr.length-1){
//             count=0
//             array.push(chunk_arr)
//             chunk_arr=[]
//         }               
//     }
//     return array
// };

// const arr = [1,9,6,3,2], size = 3;
// console.log(chunk(arr,size));