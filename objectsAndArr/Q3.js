const obj = {
    a: "x",
    b: "y",
    c: "z",
};

// output  -> interchange keys and values of obj

let result ={};

for (let key in obj){
    result [obj[key]]= key;
}

console.log(result);


//got the logic w help of gpt 
//checking if ive learned flow of github