const convertToTitle=(colNum)=>{
    let res='';
    while(colNum>0){
        let r=colNum%26
        let q=parseInt(colNum/26)
        if(r===0){
            r=26
            q=q-1
        }
        console.log(r,String.fromCharCode(64+r),q)
        res=String.fromCharCode(64+r)+res
        colNum=q
    }
    return res
}

let colNum=26
console.log(convertToTitle(colNum))
