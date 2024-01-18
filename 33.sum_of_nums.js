//sum of numbers without largest, smallest and second largest &smallest numbers.
const a =Date.now()
let arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,-1]
let large=-Infinity
let sec_large=-Infinity
let small=Number.MAX_SAFE_INTEGER
let sec_small=Number.MAX_SAFE_INTEGER
let sum=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>large){
        sec_large=large
        large=arr[i]
    }else if(arr[i]<large&&arr[i]>sec_large){
        sec_large=arr[i]
    }

    if(arr[i]<small){
        sec_small=small
        small=arr[i]
    }else if(arr[i]>small&&arr[i]<sec_small){
        sec_small=arr[i]
    }
}
for(let i=0;i<arr.length;i++){
    if(arr[i]==large||arr[i]==small||arr[i]==sec_large||arr[i]==sec_small){
        continue
    }
    sum+=arr[i]
}
const b =Date.now()-a
console.log(sum)
console.log(b);