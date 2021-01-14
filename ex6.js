//Escreva um script que leia 2 valores como parâmetros da linha de comando e escreva na tela o maior deles.

let n1 = process.argv[2];
let n2 = process.argv[3];


let resultado = (n1 > n2) ? console.log(`O número ${n1} é maior que ${n2}.`) : console.log(`O número ${n2} é maior que ${n1}.`);

/*
if (n1 > n2) {
    console.log(`O número ${n1} é maior que ${n2}.`);
} else {
    console.log(`O número ${n2} é maior que ${n1}.`);
}
*/