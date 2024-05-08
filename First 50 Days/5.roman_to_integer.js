// Roman to Integer
//Given a roman numeral, convert it to an integer.
//I refered youtube and solved it. The solution was astonishing while going through the loop.
//it forms the result well.

const romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

    let res=0;

    s.split('').forEach((num, i)=>{
        if(map[num]<map[s[i+1]]) res -=map[num]
        else res+=map[num]
    })

    return res
};

const string = "MCMXCIV";
console.log(romanToInt(string));
