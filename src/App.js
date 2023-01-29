import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { findLongestWord, Question2, Question3 ,Question4} from './Ecmascript/Ecmascript';
import { isCat, Question41 } from './Ecmascript/fonction';


function App() {
  useEffect((lengths = ["Bilbo", "Gandalf", "Nazguuuuuuuul"], ) => {
    findLongestWord(lengths)
    const input =[
      ["a","b","c"],
      ["c","d","f"],
      ["d","f","g"]
      ];
      Question2(input) 
      let students = [
        {name : "John" , id : 123 , marks : 98},
        {name : "Baba" , id : 101 , marks : 23},
        {name : "John" , id : 200 , marks : 45},
        {name : "Wick" , id : 115 , marks : 75},
    ]
    Question3(students) 
    const animals = [


      {name : "cat" , id : 1},
      {name : "dog" , id : 2},
      {name : "butterfly" , id : 3},
     
  ]
  Question4(animals)
  const animals1 = [


    {name : "cat" , id : 1},
    {name : "dog" , id : 2},
    {name : "butterfly" , id : 3},
   
]
  Question41(animals1)
  //isCat(animals1)
  const inventory = [
    {name : "cat" , id : 1},
    {name : "dog" , id : 2},
    {name : "butterfly" , id : 3},
  
  ];
  
  function isanimal(animal) {
    return animal.name === "butterfly";
  }
  
  console.log(inventory.find(isanimal));
 });
   

     
}


export default App; 

