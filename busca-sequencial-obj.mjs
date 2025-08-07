function buscaSequencial(vetor, fnComp){
    for(let i = 0; i < vetor.length; i++){
        if(fnComp(vetor[i])) return i
    }
    return -1
}

function comparaNome(obj){
    return obj.first_name === "ALEXANDRE"
}


// function comparaClassificacao(obj){
//     return obj.classification === "M"
// }

import {objNomes} from "./data/vetor-obj-nomes.mjs"

console.time("Buscando ALEXANDRE")
console.log("Posição do valor first_name ALEXANDRE:", buscaSequencial(objNomes,comparaNome))
console.timeEnd("Buscando ALEXANDRE")
