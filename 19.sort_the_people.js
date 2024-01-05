const sortPeople = function(names, heights) {
    let obj={}
    for(const [i, elem] of heights.entries()){
        if(!obj[elem]) obj[elem]=names[i]
    }    
    return Object.values(obj).reverse()
};

const names = ["Mary","John","Emma"], heights = [180,165,170]
console.log(sortPeople(names,heights))