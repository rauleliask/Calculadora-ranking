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
    if (saldo < 10) {
        nivel = "Ferro";
    } else if (saldo >= 10 && saldo <= 20) {
        nivel = "Bronze";
    } else if (saldo >= 21 && saldo <= 50) {
        nivel = "Prata";
    } else if (saldo >= 51 && saldo <= 80) {
        nivel = "Ouro";
    } else if (saldo >= 81 && saldo <= 90) {
        nivel = "Diamante";
    } else if (saldo >= 91 && saldo <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
    
    return nivel;

}
console.log("o Herói " + nome + " e tem de saldo de vitórias " + saldoVitorias + " e está no nível " + nivel);