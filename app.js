var name = "Christy";

const states = 50;

var nine = 5 + 4;
console.log(name, states, nine);

// charCodeAt function gives unicode value to specified index of string (name)
if (name.charCodeAt(0)>76){
    console.log("Back of the line!");
} else {
    console.log("Next!");
}


function sayHello(){
    alert("Hello World!");
}
sayHello();



function checkAge(name, age){
    if (age<21){
        alert("Sorry "+name+", you aren't old enough to view this page!");
    }
}
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

var veggies = ["cucumber", "tomato", "bell pepper"];

for (var i=0; i<veggies.length; i++){
    console.log(veggies[i]);
}



var people = [

    {name: "Shirley",
    age: 20},

    {name: "Judah",
    age: 21},

    {name: "Sheila",
    age: 22}

]

// use for loop
for(var i=0; i<people.length; i++){
    checkAge(people[i].name, people[i].age);
}



// use forEach array function
people.forEach(function (element, index, array){
    checkAge(people[index].name, people[index].age);
})



function getLength(word){
    return word.length;
}

var result = getLength("Hello World");
console.log(result);


if (result%2==0){
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}