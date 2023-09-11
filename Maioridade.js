//Importando o módulo 
const readline = require('readline-sync')

const idade = parseInt(readline.question("Digite sua idade: \n"))
if(idade >= 18){
    console.log("O usuário é maior de idade.");
}else{
    console.log("O usuário é menor de idade.");
}