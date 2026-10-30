// Buddy Program 2026.2 — horas complementares.
// Dados importados de "horas - 26.2.xlsx". Atualize esta lista se a planilha mudar.
const participantes = {
  "alcidysapb": {
    "nome": "ALCIDYS ALVES PEREIRA BARBOSA",
    "horas": 30
  },
  "alvaromrbs": {
    "nome": "ALVARO MODESTO RIBEIRO BORGES DE SOUZA",
    "horas": 20
  },
  "analajdf": {
    "nome": "ANA LUISA ALMEIDA JASMINS DIAS FARINHA",
    "horas": 5
  },
  "analcc1": {
    "nome": "ANA LUIZA DA CONCEICAO CORDEIRO",
    "horas": 30
  },
  "beatrizdh": {
    "nome": "BEATRIZ DREYFUSS HURTADO",
    "horas": 20
  },
  "carolinaor": {
    "nome": "CAROLINA OSHIRO ROSSI",
    "horas": 20
  },
  "celinespl": {
    "nome": "CELINE SHINRUH PENG LU",
    "horas": 20
  },
  "enzouc": {
    "nome": "ENZO URIOSTE CANAVERO",
    "horas": 20
  },
  "felipecm13": {
    "nome": "FELIPE DA COSTA MENUSIER",
    "horas": 10
  },
  "felipeqs": {
    "nome": "FELIPE QUINTAS SALVARANI",
    "horas": 20
  },
  "fellipebvs": {
    "nome": "FELLIPE BERNARDES VAZ SILVA",
    "horas": 20
  },
  "gabrielads1": {
    "nome": "GABRIELA DALTRO SUZARTE",
    "horas": 20
  },
  "guilhermenb": {
    "nome": "GUILHERME NEVES BATISTA",
    "horas": 20
  },
  "iaravsp": {
    "nome": "IARA VIVIAN SOUSA PINTO",
    "horas": 20
  },
  "ionef": {
    "nome": "IONE FORESTI",
    "horas": 30
  },
  "jesuinomc": {
    "nome": "JESUINO MENDES CASSAMA",
    "horas": 10
  },
  "joaofmt": {
    "nome": "JOAO FRANCISCO MARQUES TIRINTAN",
    "horas": 20
  },
  "joaovps2": {
    "nome": "JOÃO VICTOR PIOVANI DOS SANTOS",
    "horas": 10
  },
  "juliabp2": {
    "nome": "JULIA BARRIOS DE PINHO",
    "horas": 5
  },
  "juliald": {
    "nome": "JULIA LOURENCO DIAS",
    "horas": 15
  },
  "lucasfcs": {
    "nome": "LUCAS FRANCISCO CASSARA DE SOUZA",
    "horas": 20
  },
  "mariacamrm": {
    "nome": "MARIA CLARA ANTUNES MOTTA ROMERA MOLINA",
    "horas": 15
  },
  "mariaes3": {
    "nome": "MARIA EDUARDA DOS SANTOS",
    "horas": 20
  },
  "marialbj": {
    "nome": "MARIA LUIZA BAHIA DE JESUS",
    "horas": 20
  },
  "pedrobm6": {
    "nome": "PEDRO BENTO MICHELATO",
    "horas": 15
  },
  "ricardobsb": {
    "nome": "RICARDO BENJAMIM SALMOS BESSA",
    "horas": 10
  },
  "saracb": {
    "nome": "SARA CEPIL BELO",
    "horas": 20
  },
  "viniciusegs": {
    "nome": "VINICIUS EDUARDO GOMEZ DOS SANTOS",
    "horas": 30
  }
};

function mostrarMensagem() {
    const entrada = document.getElementById("usuario").value.trim().toLowerCase();
    const resultado = document.getElementById("resultado");
    resultado.replaceChildren();

    function mostrarErro(texto) {
        const mensagem = document.createElement("p");
        mensagem.className = "erro";
        mensagem.textContent = texto;
        resultado.append(mensagem);
    }

    if (!entrada) {
        mostrarErro("Digite seu usuário do Insper.");
        return;
    }
    if (entrada.includes("@")) {
        mostrarErro("Digite apenas seu usuário, sem o e-mail.");
        return;
    }
    if (!Object.hasOwn(participantes, entrada)) {
        mostrarErro("Usuário não encontrado. Confira seu usuário do Insper.");
        return;
    }

    const participante = participantes[entrada];
    const mensagem = document.createElement("p");
    const nome = document.createElement("strong");
    nome.textContent = participante.nome;
    const horas = document.createElement("strong");
    horas.textContent = `${participante.horas.toLocaleString("pt-BR")}h complementares`;
    mensagem.append("Olá ", nome, " você deverá cadastrar ", horas, "!");

    const agradecimento = document.createElement("p");
    agradecimento.textContent = "Obrigado pela sua dedicação!";
    resultado.append(mensagem, agradecimento);
}

document.getElementById("busca").addEventListener("submit", (evento) => {
    evento.preventDefault();
    mostrarMensagem();
});
