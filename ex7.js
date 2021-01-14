//Escreva um script que leia 3 valores como parâmetros da linha de comando e escreva na tela o maior deles.


let n1 = process.argv[2];
let n2 = process.argv[3];
let n3 = process.argv[4];

if (n1 > n2 && n1 > n3) {
    console.log(`O número ${n1} é o maior.`);
} else if (n2 > n1 && n2 > n3) {
    console.log(`O número ${n2} é o maior.`);
} else if(n3 > n1 && n3 > n2){
    console.log(`O número ${n3} é o maior`);
} else if(n1 == n2 && n2 == n3){
    console.log(`Os números são todos iguais de valor: ${n1}`);
}



