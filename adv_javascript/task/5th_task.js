const array=['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape']
const new_array=array.filter((data)=>{
    return data.length>5
})
console.log(new_array)