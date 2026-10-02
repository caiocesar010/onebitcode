const resultado = prompt("Digite um número de 1 a 5:");

switch (resultado) {
    case "1":
        alert("Você digitou o número 1");
        break;
    case "2":
        alert("Você digitou o número 2");
        break;
    case "3":
        alert("Você digitou o número 3");
        break;
    case "4":
        alert("Você digitou o número 4");
        break;
    case "5":
        alert("Você digitou o número 5");
        break;
    default:
        alert("Número inválido. Por favor, digite um número de 1 a 5.");
        break;
}