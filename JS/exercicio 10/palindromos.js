// Escreva um programa em javascript que seja capaz de identificar se uma palavra é um palíndromo. Um palíndromo é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem. O programa deve iniciar pedindo que seja informada uma palavra e então deve exibir uma mensagem dizendo se aquela palavra é ou não um palíndromo. Caso não seja um palíndromo, o programa deve mostrar a palavra lida da esquerda para direita e da direita para esquerda.

const palavra = prompt("Digite uma palavra:");

// Variável para armazenar a palavra invertida
let palavraInvertida = "";

// Laço FOR para percorrer a palavra do último caractere até o primeiro
for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
}

// Converte ambas para letras minúsculas para ignorar diferenças de maiúsculas/minúsculas
if (palavra.toLowerCase() === palavraInvertida.toLowerCase()) {
    alert(`A palavra "${palavra}" é um palíndromo!`);
} else {
    alert(
        `A palavra "${palavra}" NÃO é um palíndromo!\n\n` +
        `Esquerda para direita: ${palavra}\n` +
        `Direita para esquerda: ${palavraInvertida}`
    );
}