
//Question 1 
 export  function findLongestWord(lengths = ["Bilbo", "Gandalf", "Nazgul"]){
   
    lengths.map(item => item.length)
    let result = lengths.reduce((sum, current) => sum + current, 0);

    let longest = lengths.reduce(
        function (a, b) {
            return a.length > b.length ? a : b;
        }
    );
   console.log(longest+ ":" +longest.length)   
}

//Question 2 
export function Question2( input){

  
  const input2 = input.flat();
  
  const inputCounts = input2.reduce(function(obj, cal) {
    if (!obj[cal]) {
    
      obj[cal] = 1;
    } else {
    
      obj[cal]++;
    }
    
    return obj;
  }, {}); 
  
  console.log(inputCounts);
}
  //Question 3 
  export function Question3 (students){




const reformattedArray = students.map(({ name ,id,marks }) => ({   marks , name  }));
console.log(reformattedArray); 

 const c1 = students.filter(person => person.marks <50).reduce((a,b)=>a.marks+15 + b.marks+15 )
 const c = students.filter(person => person.marks > 50).reduce((a,b)=>a.marks + b.marks ) 
 
    console.log(c+c1) 
}
  

export function Question4(animals){
  const count = animals.push({name:'cows',id:4});
  console.log(count);
  console.log(animals);
  animals.push({name:"chiken", id:5});
  console.log(animals);
  }

