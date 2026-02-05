const data = { 
    a: 3, 
    b: 1, 
    c: 2 
}

//converting to array

let entries  = Object.entries(data);

entries.sort((x,y)=> x[1]-y[1]);

let result = [];

for(let [key, value] of entries){
    result.push(`${key}:${value}`)
}

console.log(result.join(" > "));

//learned abt sorting questions today 
//got logic from gpt

//another Question

const marks = { 
    ram: 45, 
    shyam: 12, 
    mohan: 67, 
    amit: 30 
};

let result2 = [];

let entries2 = Object.entries(marks);

//sort by value

entries2.sort((x,y)=> x[1]-y[1]);

for(let [key, value] of entries2){
    result2.push(`${key}: ${value}`)
}

console.log(result2.join(" > "));

