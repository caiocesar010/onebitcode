// Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

// Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
// Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
// Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.
// Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.

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