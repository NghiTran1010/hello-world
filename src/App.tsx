import React from 'react';
import './App.css';

const name : string = "Cuong";
let name2 = "Vinh";
name2 = "Huy";
name2 = "Ai";
let number = 9;
let isDeleted = false;

let colors = ["GA HEO CHICKEN", "yellow", "blue"];

let person = {
  height: "tall",
  language: "vietnamese",
  food: "pho"
};

//Spread Operator
let person2 = {
  ...person,
  shoes: "Nike"
}

//Destructuring
let { language } = person;
let [red, yellow, blue] = colors;

//Conditionals
let show = "chao";
language = "vietnamese";

if (language === "vietnamese") {
    show = "chao moi nguoi";
} 
else if (language === "spanish") {
  show = "Hola Coma Estas";
}
else {
    show = "hello there everyone";
}

//Looping
let numbers = [5, 3, 2];
console.log(numbers[2])
console.log("length of numbers: ", numbers.length)
console.log("Starting for loops!!!")
for (let i = 0; i < numbers.length; i++) {
  // console.log("Length of array: " + numbers.length);
  // console.log(`i ${i}`);
  // console.log("numbers of i: " + numbers[i]);
}

numbers.forEach(element => {
  console.log("For Each");
  console.log(element);
})

const restaurants = ["bonchon", "704", "j tea"];

function App() {
  return (
    <div className="App">
        {colors}
        <br/>
        {numbers}
        <br/>
        {person.food}
        <br/>
        <br/>
        {person2.shoes}
        <br/>
        {language}
        <br/>
        {red}
        <br/>
        {language === "vietnamese" ? show : ""}
        {
          numbers.map(number => {
            return <h1>{number}</h1>
          })
        }
        <br/>
        {
          restaurants.map(quanAn => {
            return <h3>{quanAn}</h3>
          })
        }
    </div>
  );
}

export default App;
