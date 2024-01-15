const maxProfit= function(prices){
    let left=0, right=1;//buy and sell
    let max_profit = 0;
    while(right<prices.length){
        if(prices[left]<prices[right]){
            let profit=prices[right]-prices[left]//our current profit
            max_profit=Math.max(max_profit, profit)
        }else{
            left=right
        }
        right++;
    }     
    return max_profit;
}


const prices = [7,1,5,3,6,4]//[1,2]
console.log(maxProfit(prices));
