const maxLength = arr => {
    let res = 0;
  
    const dp = (idx, cur) => {
      res = Math.max(res, cur.length);
      for (let i = idx; i < arr.length; i++) {
        ((cur+arr[i]).length === new Set([...cur,...arr[i]]).size) && 
          dp(i + 1, cur + arr[i]);
      }
    }
  
    dp(0, '');
    return res;
  };


const arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"]
console.log(maxLength(arr));