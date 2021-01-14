/** Utilizando um bloco switch-case, escreva um script que, 
 * dependendo do valor de um parâmetro de linha de comando, 
 * escreva o dia da semana correspondente. Por exemplo, se dia for igual a 1, escreva "Domingo";
 *  se for igual a 2, escreva "Segunda", etc... */

 
let dias = parseInt(process.argv[2]);

switch (dias) {
    case 1:
        console.log(`Domingo`);
        break;
    case 2:
        console.log(`Segunda`);
        break;
    case 3:
        console.log(`Terça`);
        break;
    case 4:
        console.log(`Quarta`);
        break;
    case 5:
        console.log(`Quinta`);
        break;
    case 6:
        console.log(`Sexta`);
        break;
    case 7:
        console.log(`Sabado`);
        break;
    default:
        console.log(`Nenhuma das alternativas.`);
}