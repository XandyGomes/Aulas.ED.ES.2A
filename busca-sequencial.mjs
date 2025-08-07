function buscaSequencial(vetor, valorBusca){
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] === valorBusca ) return i
    }
    return -1
}

const frutas = ["mamão", "melão", "melancia", "morango", "abacaxi"]

// console.log("Posição de morango:", buscaSequencial(frutas, "morango"))
// console.log("Posição de melão:", buscaSequencial(frutas, "melão"))
// console.log("Posição de abacate:", buscaSequencial(frutas, "abacate"))


import {nomes} from "./data/vetor-nomes.mjs"

console.time("Buscando ZYON")
console.log("Posição de ZYON:", buscaSequencial(nomes, "ZYON"))
console.timeEnd("Buscando ZYON")
