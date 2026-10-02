const medida = parseFloat(prompt("Digite a medida em metros:"));
const unidade = prompt("Digite a unidade para a qual deseja converter (mm, cm, dm, dam, hm , km):");

switch (unidade) {
    case "mm":
        alert("A medida em centímetros é: " + (medida * 1000));
        break;
    case "cm":
        alert("A medida em milímetros é: " + (medida * 100));
        break;
    case "dm":
        alert("A medida em decímetros é: " + (medida * 10));
        break;
    case "dam":
        alert("A medida em quilômetros é: " + (medida / 10));
        break;
    case "hm":
        alert("A medida em decâmetros é: " + (medida / 100));
        break;
    case "km":
        alert("A medida em hectômetros é: " + (medida / 1000));
        break;
    default:
        alert("Unidade inválida. Por favor, digite mm, cm, dm, dam, hm , km.");
        break;
}