const mensagens = {
    "alcidysapb": "Olá, Alcidys! Esta é uma mensagem personalizada para você.",
    "alvaromrbs": "Olá, Alvaro! Esta é uma mensagem personalizada para você.",
    "analajdf": "Olá, Ana! Esta é uma mensagem personalizada para você.",
    "analcc1": "Olá, Ana Luiza! Esta é uma mensagem personalizada para você.",
    "beatrizdh": "Olá, Beatriz! Esta é uma mensagem personalizada para você.",
    "caiohn": "Olá, Caio! Esta é uma mensagem personalizada para você.",
    "carolinaor": "Olá, Carolina! Esta é uma mensagem personalizada para você.",
    "celinespl": "Olá, Celine! Esta é uma mensagem personalizada para você.",
    "enzouc": "Olá, Enzo! Esta é uma mensagem personalizada para você.",
    "felipecm13": "Olá, Felipe! Esta é uma mensagem personalizada para você.",
    "felipeqs": "Olá, Felipe! Esta é uma mensagem personalizada para você.",
    "fellipebvs": "Olá, Fellipe! Esta é uma mensagem personalizada para você.",
    "gabrielads1": "Olá, Gabriela! Esta é uma mensagem personalizada para você.",
    "guilhermenb": "Olá, Guilherme! Esta é uma mensagem personalizada para você.",
    "iaravsp": "Olá, Iara! Esta é uma mensagem personalizada para você.",
    "ionef": "Olá, Ione! Esta é uma mensagem personalizada para você.",
    "jesuinomc": "Olá, Jesuino! Esta é uma mensagem personalizada para você.",
    "joaofmt": "Olá, João! Esta é uma mensagem personalizada para você.",
    "juliabp2": "Olá, Julia! Esta é uma mensagem personalizada para você.",
    "juliald": "Olá, Julia! Esta é uma mensagem personalizada para você.",
    "lucasfcs": "Olá, Lucas! Esta é uma mensagem personalizada para você.",
    "mariacamrm": "Olá, Maria! Esta é uma mensagem personalizada para você.",
    "mariaes3": "Olá, Maria! Esta é uma mensagem personalizada para você.",
    "marialbj": "Olá, Maria Luiza! Esta é uma mensagem personalizada para você.",
    "miguelfod": "Olá, Miguel! Esta é uma mensagem personalizada para você.",
    "pedrobm6": "Olá, Pedro! Esta é uma mensagem personalizada para você.",
    "pedrogkmc": "Olá, Pedro Guilherme! Esta é uma mensagem personalizada para você.",
    "ricardobsb": "Olá, Ricardo! Esta é uma mensagem personalizada para você.",
    "saracb": "Olá, Sara! Esta é uma mensagem personalizada para você.",
    "viniciusegs": "Olá, Vinicius! Esta é uma mensagem personalizada para você."
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
        resultado.innerHTML = "<p class='erro'>usuário não encontrado</p>";
    }
}