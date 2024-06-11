// Importa a biblioteca prompt-sync
const prompt = require("prompt-sync")();

//Solicita dados do herói e número de vitórias e derrotas
let nome = prompt("Digite o seu nome: ");
let vitorias = parseInt(prompt("Quantas vitórias você tem? "));
let derrotas = parseInt(prompt("Quantas derrotas você tem? "));
let saldoVitorias = vitorias-derrotas;
let nivel = saldo();

//função para saber saldo de vitórias
function saldo(){

    let saldo = vitorias - derrotas;
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
    
    return nivel;

}
console.log("o Herói " + nome + " e tem de saldo de vitórias " + saldoVitorias + " e está no nível " + nivel);