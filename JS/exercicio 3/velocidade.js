// Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)

const veiculo1 = prompt("Digite o nome do veículo 1:");
const veiculo2 = prompt("Digite o nome do veículo 2:");
const velocidade1 = prompt("Digite a velocidade do veículo 1:");
const velocidade2 = prompt("Digite a velocidade do veículo 2:");

if (velocidade1 > velocidade2) {
    alert(`O veículo ${veiculo1} é mais rápido que o veículo ${veiculo2}`);
} else if (velocidade2 > velocidade1) {
    alert(`O veículo ${veiculo2} é mais rápido que o veículo ${veiculo1}`);
} else {
    alert(`Os veículos ${veiculo1} e ${veiculo2} têm a mesma velocidade.`);
}