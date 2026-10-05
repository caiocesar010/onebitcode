// Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.

const menu = () => {
    let opcao = "";

    do {
        opcao = prompt(
            "Escolha uma opção:\n" +
            "1. Opção 1\n" +
            "2. Opção 2\n" +
            "3. Opção 3\n" +
            "4. Opção 4\n" +
            "5. Encerrar"
        );

        switch (opcao) {
            case "1":
                alert("Você escolheu a Opção 1");
                break;
            case "2":
                alert("Você escolheu a Opção 2");
                break;
            case "3":
                alert("Você escolheu a Opção 3");
                break;
            case "4":
                alert("Você escolheu a Opção 4");
                break;
            case "5":
                alert("O sistema está sendo encerrado.");
                break;
            default:
                alert("Opção inválida! Escolha um número de 1 a 5.");
                break;
        }
    } while (opcao !== "5");
};

menu();