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