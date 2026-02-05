const data = { 
    a: [1,2,3], 
    b: [2,3,4], 
    c: [3,4,5] 
}

let arrays = Object.values(data);
//[[1,2,3],[2,3,4],[3,4,5,]]

let first = arrays[0];
let result = [];

for (let num of first){
    let isCommon = true;

    for (let arr of arrays){
        if(!arr.includes(num)){
            isCommon= false;
            break;
        }
    }

    if(isCommon){
        result.push(num)
    }

}
console.log(result);



