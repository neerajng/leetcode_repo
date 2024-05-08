//792. Number of Matching Subsequences

var numMatchingSubseq = function(s, words) {
    var result = 0;
    var map = new Map();
    for (let i = 0; i < words.length; i++){
        if (words[i].length > s.length) continue;
        if (isSubsequence(words[i], s, map)){
            result++
        }
    }
    return result
};

const isSubsequence = (word, string, map) => {
    if (map.has(word)) return map.get(word);
    let index = -1;
    for (const c of word){
        index = string.indexOf(c, index+1);
        if (index == -1){
            map.set(word, false);
            return false;
        }
    }
    map.set(word, true);
    return true
}


s = "abcde", words = ["a","bb","acd","ace"];
console.log(numMatchingSubseq(s, words));