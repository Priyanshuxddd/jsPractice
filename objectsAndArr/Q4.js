const obj = { x: 5, y: 100, z: 40 };

let maxValue = -Infinity;
let maxKey = "";

for (let keys in obj){
    if(obj[keys]> maxValue){
        maxValue = obj[keys]
        maxKey = keys
    }
}

console.log(maxKey);

