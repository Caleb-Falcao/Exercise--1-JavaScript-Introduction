//Modifique a questão anterior para ler a temperatura em Fahrenheit a partir 
//de um parâmetro da linha de comando.

let f = process.argv[2];
let c = (5 / 9) * (f - 32)

console.log(`${f} ºF é: ${c} ºC`);