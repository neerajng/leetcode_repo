const numberOfCuts= function(n){
    return ((n===1)?0:(n%2===0)? n/2:n)
}

console.log(numberOfCuts(3))
