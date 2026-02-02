let data =  [

 {name:"rahul", city:"Delhi"},
 {name:"rhgan", city:"Mumbai"},
 {name:"lucky", city:"Delhi"},
 {name: "Harsh", city:"Mumbai"},
 {name: "John", city:"Agra"}   

]

function groupByCity(people){
    // empty object to store final result

    let result = {}

    //loop through each person in array
    for(let i=0; i<people.length; i++){
        
    // take person from array    
        let person = people[i];
    
    //take city from the person(this will be key)
        let city = person.city

    //take name from the person of that city    
        let name = person.name
    
        if(!result[city]){
            result[city] = [];
        }
    
        //push persons name into array under the city key

        result[city].push(name)
    }    

        return result
}

console.log(groupByCity(data));

//another object (trying things out)

let employees = [
  { name: "Alice", department: "HR" },
  { name: "Bob", department: "Engineering" },
  { name: "Charlie", department: "HR" },
  { name: "David", department: "Marketing" },
  { name: "Eve", department: "Engineering" }
];

//output  ->  group employees by deparetement

let result2 = {};

function groupByEmployees(employee){
    for(let i = 0; i<employee.length; i++){
        let person = employee[i];
         let name = person.name;
         let department =person.department; 

         if(!result2[department]){
            result2[department] = [];
    
        }

        result2[department].push(name)

    }
        return result2
}

console.log(groupByEmployees(employees));


//last grouping problem 

let books = [
  { title: "Harry Potter", genre: "Fantasy" },
  { title: "Rich Dad Poor Dad", genre: "Finance" },
  { title: "Lord of the Rings", genre: "Fantasy" },
  { title: "Atomic Habits", genre: "Self-Help" },
  { title: "The Intelligent Investor", genre: "Finance" }
];

//output ->  group books by genre

//logic 
/* 
->create an empty box to store the final object
->will make a fn inside loop the elements
->will access genre as key and title as value
->if genre aray exists push title to it if not create an genre array
-> repeat for all index of array
-> return the object and log
*/

let result3 = {};
 
function groupByGenre(books){
    for(let i = 0; i<books.length; i++){
         let book= books[i];
         let title= book.title;
         let genre = book.genre;

        if(!result3[genre]){
            result3[genre]= [];
        } 

            result3[genre].push(title)
    }
        return result3
}

console.log(groupByGenre(books));




