const minLength = function(s) {
    
    while(/\AB|CD/.test(s)){
        s=s.replace(/\AB|CD/g, '')
    }
    return s.length
};

const s = "ABFCACDB"
console.log(minLength(s));
