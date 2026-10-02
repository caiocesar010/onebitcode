let velocidade = 0;

do {
    alert(`A velocidade do seu carro é ${velocidade} km/h`);
    velocidade -= 20;
} while (velocidade > 0);

alert(`O carro parou! A velocidade final é ${velocidade} km/h`);