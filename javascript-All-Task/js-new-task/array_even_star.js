let a = [1, 2, 3, 4, 5];
let b = [];
// let c=[];
for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
        b.push("*");
    }
    else{
        b.push(a[i])
    }
}
// let result=c.concat(b)
// console.log(result)
console.log(b)