// Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

let fila = prompt("Digite o nome do paciente para iniciar a fila: ");
let pacientes = [fila];
let opcao = "";

do {
    // Monta a visualização da fila
    let listaPacientes = "";
    if (pacientes.length > 0) {
        listaPacientes = pacientes.map((paciente, index) => `${index + 1}º ${paciente}`).join("\n");
    } else {
        listaPacientes = "Fila vazia";
    }

    // Exibe o menu
    opcao = prompt(
        "Fila de espera do consultório médico:\n" +
        listaPacientes +
        "\n\nEscolha uma opção:\n" +
        "1. Novo paciente\n" +
        "2. Consultar paciente\n" +
        "3. Sair"
    );

    // Lógica das opções dentro do loop
    switch (opcao) {
        case "1":
            let novo = prompt("Digite o nome do próximo paciente:");
            if (novo) {
                pacientes.push(novo);
            }
            break;

        case "2":
            if (pacientes.length > 0) {
                let consultado = pacientes.shift();
                alert(`Paciente consultado: ${consultado}`);
            } else {
                alert("Não há pacientes na fila para consultar!");
            }
            break;

        case "3":
            alert("Encerrando o programa...");
            break;

        default:
            if (opcao !== null) {
                alert("Opção inválida!");
            }
            break;
    }

} while (opcao !== "3");