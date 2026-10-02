const nome = prompt("Digite seu nome:");
const poderDeAtaque = parseFloat(prompt("Digite o poder de ataque do seu personagem:"));

const nomeInimigo = prompt("Digite o nome do inimigo:");
let vidaInimigo = parseFloat(prompt("Digite a vida do inimigo:"));
const poderDeDefesa = parseFloat(prompt("Digite o poder de defesa do inimigo:"));
const escudo = (prompt("Ele possui escudo? (SIM/NÃO)"));

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && escudo === "Não") {
  danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && escudo === "Sim") {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

vidaInimigo -= danoCausado

alert(nome + " causou " + danoCausado + " pontos de dano em " + nomeInimigo)
alert(
  nome + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
  nomeInimigo + "\nPontos de vida: " + vidaInimigo +
  "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + escudo)