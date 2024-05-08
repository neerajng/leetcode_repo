const reverseVowels = function(s) {
    const regex=/[aeiou]/i
    const arr=s.split('')
    let i=0, temp;
    let j=arr.length-1
    
    while(i<j){
        if(!regex.test(arr[i])){
            i++
        }
        if(!regex.test(arr[j])){
            j--
        }
        if(regex.test(arr[i])&&regex.test(arr[j])){
            temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
            i++
            j--
        }
    }
    return arr.join('')

};

const s = "a.b,."
console.log(reverseVowels(s));
