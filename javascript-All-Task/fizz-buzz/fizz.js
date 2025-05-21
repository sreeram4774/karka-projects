var a = 101;
var b = [];
for (let i = 1; i <= a; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        b.push("fizzbuzz");
    } else if (i % 3 === 0) {
        b.push("fizz");
    } else if (i % 5 === 0) {
        b.push("buzz");
    } else {
        b.push(i);
    }
}
console.log(b);
