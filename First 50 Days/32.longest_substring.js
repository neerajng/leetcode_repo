//Longest Substring Without Repeating Characters
 const lengthOfLongestSubstring= (s)=>{
    let set =new Set()
    let left = 0;
    let maxSize = 0;

    if(s.length<=1) return s.length

    for(let i=0;i<s.length;i++){
        while(set.has(s[i])){
            set.delete(s[left])            
            left++
        }
        set.add(s[i]);
        maxSize = Math.max(maxSize, i - left + 1)
    }
    return maxSize;
 }



 console.log(lengthOfLongestSubstring(s));