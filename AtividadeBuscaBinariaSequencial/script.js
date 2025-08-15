const nomes = ["VERONICA", "ADRIANO", "ALEXANDRE", "JOSE", "MARIA", "ORKUTILSON", "ZULEIDA", "JERDERSON", "ADAMASTOR"]
nomes.sort()

//busca sequencial
function buscaSequencial(vetor, valorBusca){
    let comps = 0
    for(let i = 0; i < vetor.length; i++){
        comps++
        if(vetor[i] === valorBusca ) return {pos: i, comps}
    }
    return {pos: -1, comps}
}

//busca binaria
function buscaBinaria(vetor, valorBusca){
    let comps = 0
    let ini = 0
    let fim = vetor.length - 1
    while(fim >= ini){
        comps++
        let meio = Math.floor((ini + fim) / 2)

        if(valorBusca === vetor[meio]){
            comps++
            return {pos: meio, comps}
        }
        else if(valorBusca > vetor[meio]){
            comps += 2
            ini = meio + 1
        }
        else{
            comps +=2
            fim = meio - 1
        }
    }
    return {pos: -1, comps}
}

//funções de interface
function execBuscaSequencial(){
    const valor = document.getElementById('valorBusca')
        .value.toUpperCase()
    const resultado = buscaSequencial(nomes, valor)
    exibirResultado("Sequencial", resultado)
}

function execBuscaBinaria(){
    const valor = document.getElementById('valorBusca')
        .value.toUpperCase()
        const resultado = buscaBinaria(nomes, valor)
        exibirResultado("Binária", resultado)
}

function exibirResultado(tipo, resultado){
    const div = document.getElementById('resultado')
    if(resultado.pos >= 0){
        div.innerHTML = `<p>${tipo}: Encontrado na posição
          ${resultado.pos} com ${resultado.comps} comparações.</p`
    }else{
        div.innerHTML = `<p>${tipo}: Não encontrado. Comparações:
          ${resultado.comps}</p>`
    }
}