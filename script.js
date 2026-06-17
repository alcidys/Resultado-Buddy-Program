const mensagens = {
    "alcidysapb": `Olá, Alcidys! Este é o seu grupo de intercambistas:

• David Najafi — Instagram: @davidnajafi | WhatsApp: +45 9393 6303
• Gabriele Cavallaro — Instagram: @gabriele.cavalllaro | WhatsApp: +39 328 713 5997
• Jan Tristan Budig — Instagram: @jan_trist | WhatsApp: +49 162 426 7823
• Luke Flier — Instagram: @luke_fl1912 | WhatsApp: +31 6 83776041
• Samuele Scalisi — Instagram: @samuele_scalisi | WhatsApp: +39 389 480 4712`,

    "alvaromrbs": "Olá, Alvaro! Este é o seu grupo de intercambistas:",
    "analajdf": "Olá, Ana! Este é o seu grupo de intercambistas:",
    "analcc1": "Olá, Ana Luiza! Este é o seu grupo de intercambistas:",
    "beatrizdh": "Olá, Beatriz! Este é o seu grupo de intercambistas:",
    "caiohn": "Olá, Caio! Este é o seu grupo de intercambistas:",
    "carolinaor": "Olá, Carolina! Este é o seu grupo de intercambistas:",
    "celinespl": "Olá, Celine! Este é o seu grupo de intercambistas:",
    "enzouc": "Olá, Enzo! Este é o seu grupo de intercambistas:",
    "felipecm13": "Olá, Felipe! Este é o seu grupo de intercambistas:",
    "felipeqs": "Olá, Felipe! Este é o seu grupo de intercambistas:",
    "fellipebvs": "Olá, Fellipe! Este é o seu grupo de intercambistas:",
    "gabrielads1": "Olá, Gabriela! Este é o seu grupo de intercambistas:",
    "guilhermenb": "Olá, Guilherme! Este é o seu grupo de intercambistas:",
    "iaravsp": "Olá, Iara! Este é o seu grupo de intercambistas:",
    "ionef": "Olá, Ione! Este é o seu grupo de intercambistas:",
    "jesuinomc": "Olá, Jesuino! Este é o seu grupo de intercambistas:",
    "joaofmt": "Olá, João! Este é o seu grupo de intercambistas:",
    "juliabp2": "Olá, Julia! Este é o seu grupo de intercambistas:",
    "juliald": "Olá, Julia! Este é o seu grupo de intercambistas:",
    "lucasfcs": "Olá, Lucas! Este é o seu grupo de intercambistas:",
    "mariacamrm": "Olá, Maria! Este é o seu grupo de intercambistas:",
    "mariaes3": "Olá, Maria! Este é o seu grupo de intercambistas:",
    "marialbj": "Olá, Maria Luiza! Este é o seu grupo de intercambistas:",
    "miguelfod": "Olá, Miguel! Este é o seu grupo de intercambistas:",
    "pedrobm6": "Olá, Pedro! Este é o seu grupo de intercambistas:",
    "pedrogkmc": "Olá, Pedro Guilherme! Este é o seu grupo de intercambistas:",
    "ricardobsb": "Olá, Ricardo! Este é o seu grupo de intercambistas:",
    "saracb": "Olá, Sara! Este é o seu grupo de intercambistas:",
    "viniciusegs": "Olá, Vinicius! Este é o seu grupo de intercambistas:"
};

function mostrarMensagem() {
    const usuario = document.getElementById("usuario").value.trim().toLowerCase();
    const resultado = document.getElementById("resultado");

    if (usuario === "") {
        resultado.innerHTML = "<p class='erro'>Digite um usuário.</p>";
        return;
    }

    if (mensagens[usuario]) {
        resultado.innerHTML = `<p>${mensagens[usuario]}</p>`;
    } else {
        resultado.innerHTML = "<p class='erro'>Usuário não encontrado.</p>";
    }
}