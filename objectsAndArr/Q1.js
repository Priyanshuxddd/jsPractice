const data = {
    food: [10,20,30],
    travel: [5,15],
    bills: [40,60]
};

let result = {};

for (let key in data){
    //console.log(key);
    //console.log(data[key]);

    let sum = 0;

    for (let num of data[key]){
        
         sum = num + sum;
            
        result[key]= sum
              
    }
}

console.log(result);


