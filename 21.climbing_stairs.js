const climbStairs = function(n){
    let ways=[0,1]
    for(let i=1;i<=n;i++){        
        ways.push(ways[i-1]+ways[i])
    }
    return ways[ways.length-1]
}

const _n=4
console.log(climbStairs(_n))//n is index and ways[n]===steps