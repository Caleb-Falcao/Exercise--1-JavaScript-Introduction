//Crie duas variáveis, chamadas ifb e campus, com os valores 'Instituto Federal de Brasília' e 
//'Campus Brasília', respectivamente.

//Crie uma terceira variável que concatene as duas separando por vírgula e 
//escreva o resultado na tela. Depois , faça a mesma coisa utilizando interpolação de strings.

let ifb = "Instituto federal de Brasilia";
let campus = "Campus Brasilia";
let concatenar = ifb + ", " + campus; // CONCATENAR
let interpolar = `${ifb}, ${campus}`; //INTERPOLAÇÃO

console.log(concatenar);
console.log(interpolar);