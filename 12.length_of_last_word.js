// one line
const _lengthOfLastWord = function(s) {
    const arr = s.trim().split(' ')
    return arr[arr.length-1].length
};

//traditional way
const lengthOfLastWord = function (s) {
  let len = 0;
  let flag = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      flag = 1;
      len++;
    } else {
      flag = 0;
    }
    if (flag === 0 && len > 0 || i===0) {
      return len;
    }
  }
};



console.log(lengthOfLastWord(" hello world "));
