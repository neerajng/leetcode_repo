const maxProfit=(prices)=>{
    let profit=0;
    let buy=prices[0];
    let total=0;
    for(let i=1;i<prices.length;i++){
        if(prices[i]<buy){
            buy=prices[i];
        }else {
            profit=prices[i]-buy;
            buy=prices[i];
            total+=profit;
        }
    }
    return total;
}

const prices = [7,1,3,5,6,4]
console.log(maxProfit(prices));