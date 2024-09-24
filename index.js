// Array que armazena os nomes e XP dos Heróis
let herois = [
    { nome: "Henry", xp: 3500 },
    { nome: "Alana", xp: 9800 },
    { nome: "Sanã", xp: 5600 }
];

// Função para determinar o nível com base na XP
function determinarNivel(xp) {
    if (xp < 1000) {
        return "Ferro";
    } else if (xp <= 2000) {
        return "Bronze";
    } else if (xp <= 5000) {
        return "Prata";
    } else if (xp <= 7000) {
        return "Ouro";
    } else if (xp <= 8000) {
        return "Platina";
    } else if (xp <= 9000) {
        return "Ascendente";
    } else if (xp <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}

// Loop para cada Herói
for (let i = 0; i < herois.length; i++) { // length retorna o número de elementos do um array
    // Obtém o Herói atual
    let heroi = herois[i];
    // Determina o nível do Herói atual utilizando a função determinarNivel()
    let nivel = determinarNivel(heroi.xp);
    console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);
}
