// const listaDeCompras = []
// console.log(listaDeCompras)

// listaDeCompras [0] = "Arroz"
// listaDeCompras [1] = "Feijão"
// listaDeCompras [2] = "Macarrão"
// listaDeCompras [3] = "Carne"
// listaDeCompras [4] = 7

// console.log(listaDeCompras)

const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

// push: Adiciona um elemento no final do array e devolve o novo tamanho do array
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

//unshift: Adiciona um elemento no início do array e devolve o novo tamanho do array
tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho)

// pop: Remove o último elemento do array e devolve o elemento removido
let elementoRemovido = arr.pop("Boromir")
console.log(arr)
console.log(elementoRemovido)

// shift: Remove o primeiro elemento do array e devolve o elemento removido
elementoRemovido = arr.shift("Boromir")
console.log(arr)
console.log(elementoRemovido)

//includes: Verifica se o array contém um determinado elemento e devolve true ou false
const inclui = arr.includes("Gandalf")
console.log(inclui)

//indexOf: Retorna o índice do primeiro elemento encontrado no array, ou -1 se não for encontrado
const indice = arr.indexOf("Gandalf")
console.log(indice)

//slice: Retorna uma cópia de uma parte do array, sem modificar o array original
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

//concat: Junta dois ou mais arrays e devolve um novo array
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)
console.log(hobbits)
console.log(outros)

//splice: Adiciona ou remove elementos de um array, modificando o array original
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")
console.log(elementosRemovidos)
console.log(sociedade)

//for: Percorre os elementos de um array, permitindo acessar cada elemento e seu índice
for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice]
  console.log(elemento + " se encontra na posição " + indice)
}