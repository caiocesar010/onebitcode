// Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

let baralho = ["Ás de Espadas", "Rei de Copas", "Valete de Ouros"];
let opcao = "";

do {
    // Exibe o menu com a quantidade atual de cartas
    opcao = prompt(
        `Cartas no baralho: ${baralho.length}\n\n` +
        "Escolha uma opção:\n" +
        "1. Adicionar uma carta\n" +
        "2. Puxar uma carta\n" +
        "3. Sair"
    );

    switch (opcao) {
        case "1":
            let novaCarta = prompt("Digite o nome da carta para adicionar ao topo do baralho:");
            if (novaCarta) {
                baralho.unshift(novaCarta); // Adiciona no topo (início do array)
                alert(`"${novaCarta}" foi adicionada ao topo do baralho.`);
            }
            break;

        case "2":
            if (baralho.length > 0) {
                let cartaPuxada = baralho.shift(); // Remove do topo (início do array)
                alert(`Você puxou a carta: ${cartaPuxada}`);
            } else {
                alert("Não há nenhuma carta no baralho para puxar!");
            }
            break;

        case "3":
            alert("Encerrando o programa do baralho...");
            break;

        default:
            if (opcao !== null) {
                alert("Opção inválida!");
            }
            break;
    }

} while (opcao !== "3");