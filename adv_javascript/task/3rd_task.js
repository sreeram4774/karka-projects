const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 78 }
];
const result=students.map((data)=>{
    data.name=="Bob" ? console.log(data.score):""
   
})

  