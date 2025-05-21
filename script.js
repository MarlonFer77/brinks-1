const frases = {
    serio: [
        "Eu sinto muito pela minha implicância.",
        "Me perdoe pelo meu comportamento.",
        "Estou disposto a fazer o que for preciso para consertar as coisas.",
    ],

    fofo: [
        "Peço te perdão, eu gosto de ti, tu é legal.",
        "Não fique chateada, eu queria te irritar",
        "Desculpa, eu só queria te fazer rir.",
    ],
    implicante: [
        "Foi mal, prometo que irei fazer novamente.",
        "Você é chata, mas eu gosto de você.",
        "Vai aceitar as desculpas ou vai ficar de birra?",
    ]
};

function gerarCarta() {
    const motivo = document.getElementById("motivo").value.trim();
    const tom = document.getElementById("tom").value;
    const resultado = document.getElementById("resultado");

    if (!motivo) {
        resultado.textContent = "Por favor, escreva o motivo da desculpa";
        return;
    }
const intros = {
    serio: "Tá bom, tentarei falar sério.",
    fofo: "Hello, Mari! Olha só, eu sei ser fofo também.",
    implicante: "Oi, eu sou o implicante, e você é a chata, mas...",
  };

    const intro = intros[tom] || "Oi";
    const meio = frases[tom][Math.floor(Math.random() * frases[tom].length)];
    const outro = "Obrigado por me ouvir. Espero que eu posso continuar te irritando";

    const carta = `${intro}\n\nSobre isso: ${motivo}\n\n${meio}\n\n${outro}`;
    resultado.textContent = carta;
}

document.getElementById("gerar").addEventListener("click", gerarCarta);