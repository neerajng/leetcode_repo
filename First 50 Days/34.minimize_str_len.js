const minimizedStringLength = function(s) {
    return new Set(s).size//new Set([...s]).size
};
const s="cbbd"
console.log(minimizedStringLength(s))