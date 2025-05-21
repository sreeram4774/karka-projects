fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(res => {
    console.log(res);
    return res.json(); 
})
.then(data => {
    // console.log(data); 
    let tbody=document.getElementById("body")
let row=document.createElement("tr")
let tdata1=document.createElement("td")
tdata1.innerHTML=data.userId
let tdata2=document.createElement("td")
tdata2.innerHTML=data.id
let tdata3=document.createElement("td")
tdata3.innerHTML=data.title
let tdata4=document.createElement("td")
tdata4.innerHTML=data.completed



tbody.appendChild(row)
row.appendChild(tdata1)
row.appendChild(tdata2)
row.appendChild(tdata3)
row.appendChild(tdata4)


})



