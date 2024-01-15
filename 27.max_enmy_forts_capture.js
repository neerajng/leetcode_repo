var captureForts = function(forts) {
    let res=0
    for(let i=0,j=0;i<forts.length;i++){

        if(forts[i]!=0){//1

            if(forts[j]== -forts[i]){//1==--1
                res=Math.max(res, i-j-1);//3-1-1=1
            }

        j=i;//j=1
        }
    }
    return res;
};  
    


const forts = [0,1,0,-1]
console.log(captureForts(forts));