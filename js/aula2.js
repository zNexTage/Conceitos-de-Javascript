const lista = ["Ferrari", "Mercedes", "Mcclaren"];

console.log("Aula 2");
console.log("************************");
console.log(lista);
lista.pop();
lista.push("Renault");
console.log(lista);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - ")); //Transforma em string e o parametro é o que vai separar os itens
// const equipe = { nome: "Williams Racing", fundador: "Frank Williams" } //Dicionário
// console.log(equipe.fundador);
const equipes = [{ nome: "Williams Racing", fundador: "Frank Williams" }, {nome:"Alfa Romeo Racing Orlen", fundador:"Peter Sauber"}] //Dicionário

for(let equipe of equipes){
    console.log(`Equipe: ${equipe.nome} - Fundador: ${equipe.fundador}`);
}
console.log("************************");