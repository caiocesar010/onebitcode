// Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.

const dinheiro = () => {
    let saldo = parseFloat(prompt("Digite a quantidade inicial de dinheiro disponível:"));

    let opcao = "";

    do {
        opcao = prompt(
            "Escolha uma opção:\n" +
            "1. Adicionar dinheiro\n" +
            "2. Remover dinheiro\n" +
            "3. Sair"
        );

        switch (opcao) {
            case "1":
                let valorAdicionar = parseFloat(prompt("Digite a quantidade a ser adicionada:"));
                saldo += valorAdicionar;
                alert(`Quantia adicionada. Saldo atual: R$ ${saldo.toFixed(2)}`);
                break;
            case "2":
                let valorRemover = parseFloat(prompt("Digite a quantidade a ser removida:"));
                if (valorRemover <= saldo) {
                    saldo -= valorRemover;
                    alert(`Quantia removida. Saldo atual: R$ ${saldo.toFixed(2)}`);
                } else {
                    alert("Saldo insuficiente.");
                }
                break;
            case "3":
                alert("O sistema está sendo encerrado.");
                break;
            default:
                alert("Opção inválida! Escolha um número de 1 a 3.");
                break;
        }
    } while (opcao !== "3");
};

dinheiro();