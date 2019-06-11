
let a=[[1,1,1,0,0,0],[0,1,0,0,0,0],[1,1,1,0,0,0],[0,0,2,4,4,0],[0,0,0,2,0,0],[0,0,1,2,4,0]];
let b=[[-1,-1,0,-9,-2,-2],[-2,-1,-6,-8,-2,-5],[-1,-1,-1,-2,-3,-4],[-1,-9,-2,-4,-4,-5],[-7,-3,-3,-2,-9,-9],[-1,-3,-1,-2,-4,-5]];
// Complete the hourglassSum function below.
function hourglassSum(arr=[]) {
    let max = (a,b) => a>b ? a : b;
    return arr.reduce((prev,curr,index,arr) => {
        console.log('index: ',index);
        debugger
        if(arr.length >=3 && curr.length >= 3){//We check a hourglass could fit
            if( arr.length - index >= 3){//We check we are not going to pick values beyond the right edge
                let reduced = curr.reduce((prev2,curr2,index2,arr2) => {
                    if( curr.length - index2 >= 3){//We check we are not going to pick values beyond the right edge
                        let firstRow = [curr2, curr[index2+1],curr[index2+2]];
                        let centre = arr[index+1][index2+1]
                        let secondRow = [ arr[index+2][index2] , 
                        arr[index+2][index2+1], 
                        arr[index+2][index2+2]];
                        
                        let ret =  firstRow.reduce((a,b) => a+b)
                        + centre
                        + secondRow.reduce((a,b) => a+b);
                        if(index2==0)
                            return ret;
                        return max(ret,prev2);
                    }else return prev2;
                },0);
                if(index==0)
                    return reduced;
                return max(reduced,prev);
            }else return prev;
        }else return 0;
    },0);
}

console.log(hourglassSum(b));
