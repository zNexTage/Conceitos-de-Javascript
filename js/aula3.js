console.log("Aula 3");
console.log("************************");
const age = prompt("Qual sua idade?");

if (age >= 18) {
    alert("Maior de idade");
}
else {
    alert("Menor de idade");
}

let count = 100;

while (count >= 0) {
    console.log(count);
    count--;
}

let anotherCount = 0;

for (; anotherCount <= 5; anotherCount++) {
    console.log(anotherCount);
}

const d = new Date();
console.log(d);
console.log(d.getMonth() + 1);
console.log("************************");