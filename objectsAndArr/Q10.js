const obj = { 
    name: "Rahul", 
    age: 23, 
    city: "Noida" 
}

const arr = ["name","city"];

let result = {};

for (let key of arr){
    
    if(key in obj){
     result[key] = obj[key]   
    }
}
console.log(result);
