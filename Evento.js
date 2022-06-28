//Data do evento maior que a data atual

var data = new Date();
var dataDoEvento = 12/24/2021

if (dataDoEvento => new Date){
console.log("Evento permitido.")
}else{
    console.log("Evento não permitido, escolha outra data para realização")
}

//Idade do participante maior que 18
let idadeDoParticipante = 25
if (idadeDoParticipante >= 18){
    console.log("Participação Perrmitida")
}else { 
    console.log("Cadastro não permiditido, Evento permitido somente para maiores de 18 anos")
}

//Lista de Participantes até 100 pessoas
let listaDeParticipantes = ["participante1","participante2","participante3","participante4"];

if (listaDeParticipantes.length < 100){
    console.log("Vaga Disponível. Cadastro permitido, Digite seus Dados")
}else{ 
    console.log("Cadastro não permitido, Vagas Esgotadas")
}

