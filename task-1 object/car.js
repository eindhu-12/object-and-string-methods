// 1.Create an object representing a car with properties make, model, and year. Use Object.freeze() to prevent modifications, then try to change the model and display the result.
console.log("Question 1:--");
var car={
    make:"BMW",
    model:"BMW X5",
    year:2020
}
console.log("object before freeze:--",car);
Object.freeze(car);
car.make="Audi";
console.log("object after freeze and modification:-",car);

// Create an object representing a user with properties name, age, and email. Use Object.isFrozen() to check if the object is frozen and display the result.
console.log("Question 2:--");

var details={
    name:"Divya",
    age: 30 ,
    email: "divya10@gmail.com"
}
console.log('Student Details:-',details);
details.batch="19R";
console.log(details);

console.log("frozen or not:-",Object.isFrozen(details));

console.log("Question 3:--");
// Create an object representing a product with properties name, category, and price. Use Object.isSealed() to check if the object is sealed and display the result.
var product={
    name:"redmi" ,
    category:"Phone", 
    price:18000
}
console.log("product with properties:--",product);
Object.seal(product);
console.log("object is sealed");
console.log("object is Sealed or not:--",Object.isSealed(product));

console.log("Question 4:--");
// Create an object representing a laptop with properties brand, model, and price. Use Object.keys() to list all the keys in the object and display them.
var laptop={
    brand:"HP",
    model:"i3 intel",
    price:40000
}
console.log("laptop details:--",laptop);
console.log("Displaying all the keys in the object:--",Object.keys(laptop));

console.log("Question 5:--");
// Create an object representing a house with properties location, size, and price. Use Object.values() to retrieve all values from the object and display them.
var house={
    Location:"KPHP",
    size:"3bhk",
    price:30000
}
console.log("House details:--",house);
console.log("Displaying all the values in the object:--",Object.values(house));

console.log("Question 6:--");
// Create an object representing a smartphone with properties brand, model, and price. Seal the object using Object.seal(), modify the price, and then check if the object is sealed using Object.isSealed().
var smartphone={
    brand:"vivo",
    model:"vivo15", 
    price:45000
}
console.log("smartphone details:--",smartphone);
Object.seal(smartphone);
console.log("object sealed");
smartphone.price=15000;
console.log(" after Modification the price of smartphone",smartphone);
console.log("checking if the object is sealed or not:-",Object.isSealed(smartphone));

console.log("Question 7:--");
// Create an object representing a book with properties title, author, and publishedYear. Freeze the object using Object.freeze(), then try to modify the publishedYear and check if the object is frozen using Object.isFrozen().
var book={
    title:"A Indian Girl", 
    author:"Chetan Bhagath", 
    publishedYear:2018
}
console.log("book details:--",book);
Object.freeze(book);
console.log("Now book details are in freeze state");
book.publishedYear=2020;
console.log("after Modification the publishedYear:-",book);
console.log("checking if the object is frozen or not",Object.isFrozen(book));


console.log("Question 8:--");
// Create an object representing a person with properties firstName, lastName, and age. Use both Object.keys() and Object.values() to retrieve and display all keys and values of the object.
var person={
    firstName:"Divya", 
    lastName:"Sai reddy",
    age:22
}
console.log("person details:-",person);
console.log("keys in person object:-",Object.keys(person));
console.log("values in person object:-",Object.values(person));

console.log("Question 9:--");
// Create an object representing a course with properties title, instructor, and duration. Use Object.entries() to get the key-value pairs, and then modify the object using the delete operator to remove the duration property.
var course={
    title:"javaScript", 
    instructor:"vamsi", 
    duration:"2 months"
}
console.log("course details:-",course);
console.log("consolling bu entries method:-",Object.entries(course));
delete course.duration;
console.log("after removed the duration property:-",course);

console.log("Question 10:--");
// Create an object representing an employee with properties name, position, and salary. Seal the object using Object.seal(), modify the position, and then use Object.keys() to list all properties and verify that no new properties can be added.
var employee={
    name:"Ramya", 
    position:"fronted developer", 
    salary:30000
}
console.log("employee details:-",employee);
Object.seal(employee)
console.log("employee object sealed");
employee.position="backend developer";
console.log("list all properties:-",Object.keys(employee));

console.log("after modification of object:-",employee);









