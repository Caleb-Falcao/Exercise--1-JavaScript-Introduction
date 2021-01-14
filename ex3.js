//Escreva um script que calcule o custo total de uma refeição em uma lanchonete: 
//dois hambúrgueres com preço de R$ 9,95 cada, mais um milk-shake que custa R$ 8,00 e
// um refrigerante por R$ 4,50. Calcule o preço total após a adição de uma taxa de 10%.
// Lembre de usar ponto, ao invés de vírgula, para separar as casas decimais.

let ham = 9.95,
    milkS = 8.0,
    refri = 4.50;

let total = ham + milkS + refri;
let juros = 10 / 100 * total;
let totalJ = total + juros;


console.log(`O total : R$ ${total} e o total com juros: R$ ${totalJ}`);