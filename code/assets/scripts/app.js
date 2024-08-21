//Diferentes formas de importar variables
//import { apiKey } from './util.js';
//import { apiKey, abc as alphabet  } from "./util.js";
//import apiKey from './util.js'
import * as util from './util.js' 

console.log(util.default);

//variables de tipo 'const' son inmutables
const userMessage = 'Hello world!!';
//variable de tipo let son mutables
let userName = 'Mango';
userName = 'Papaya';

console.log(userName)

//Functions:
function greetUser(userName, message = "Hello") {
    //console.log('Hello world');
    return `Hi, I'm ${userName}. ${message}`
}

console.log(greetUser('Tito'));

const greeting2 = greetUser('Papayita', 'me encanta!');
console.log(greeting2);

//Arrow function also nkown as anonymous functions
() => {console.log('Hello')}

const user = {
    name: 'Papaya',
    age: 32,
    getEmail(){
        console.log(`${this.name}@mail.com`);
    }
};

user.getEmail();

//Class
class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log('Hello');
    }
}

const userOne = new User('Tamarindo', 32);
userOne.greet();

//Arrays
const hobbies = ['Code', 'Climb', 'Friend'];
console.log(hobbies[0]);
//push
hobbies.push('swimm')

//map 
const editedHobbies = hobbies.map((type) => type + '!')
console.log(editedHobbies);
//map a object

//destructuring arrays 
const [courseName, classRoom] = ["Chemistry", 34];
console.log(courseName);
console.log(classRoom);

//destructuring objects
const {model, year} = {
    model: 'chevrolet',
    year: 1970
}

console.log(model);
console.log(year);

//destructuring functions
function printData({email, address}){
    console.log(`email: ${email} and address: ${address}`);
}

printData({email:'papaya@mail.com', address:'candilejo, 3'});

//spread operator: pull out the values from an array and added to a new array
//you can also use it with object
const oldLanguages = ['cobo', 'assembly', 'java'];
const trendyLanguages = ['python', 'typescript'];

const topLanguages = [...oldLanguages, ...trendyLanguages];
console.log(topLanguages);

const materiaPrima = {
    name: 'queso',
    quantity: 1.6
}

const productos = {
    ...materiaPrima,
    costo: 10,
}

console.log(productos);