const data = { a: 20,
            b: 60,
            c: 40, 
            d: 90 }

// output filter object by values >50


let result = {};

function greaterVal(obj){
    for (let key in obj){
        if(obj[key]> 50){
            result[key]= obj[key]
        }
    }
    return result
}

console.log(greaterVal(data));
