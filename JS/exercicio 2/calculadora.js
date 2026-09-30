const x =prompt("Digite o primeiro número: ")
const y =prompt("Digite o segundo número: ")

const soma = Number(x) + Number(y)
const subtracao = Number(x) - Number(y)
const multiplicacao = Number(x) * Number(y)
const divisao = Number(x) / Number(y)

alert(
  "Resultados:\n" +
  "\nSoma: " + soma +
  "\nSubtração: " + subtracao +
  "\nMultiplicação: " + multiplicacao +
  "\nDivisão: " + divisao
)