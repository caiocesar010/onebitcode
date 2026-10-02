// Escreve um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).

// Após calcular os resultados o programa deve exibi-los na tela.

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