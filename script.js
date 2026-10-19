// Buddy Program 2027.1 — entrevistas em outubro de 2026.
// Altere LOCAL_PADRAO se todas as entrevistas forem no mesmo espaço.
// Para exceções, preencha o campo local de cada participante abaixo.
// Um local vazio usa LOCAL_PADRAO; sem definição, aparece "A confirmar".
const LOCAL_PADRAO = "A confirmar";

const entrevistas = {
  "luisafov": {
    "nome": "Luisa Farias de Oliveira Valente",
    "data": "2026-10-19",
    "inicio": "08:00",
    "fim": "08:20",
    "local": "Sala Mila Fang — Biblioteca — Quatá 300"
  },
  "anams5": {
    "nome": "Ana de Medeiros Silvestre",
    "data": "2026-10-19",
    "inicio": "08:40",
    "fim": "09:00",
    "local": "Sala Mila Fang — Biblioteca — Quatá 300"
  },
  "carolinae3": {
    "nome": "Carolina Eskenazi",
    "data": "2026-10-19",
    "inicio": "09:00",
    "fim": "09:20",
    "local": "Sala Mila Fang — Biblioteca — Quatá 300"
  },
  "leonardofb": {
    "nome": "Leonardo Ferrante Baldacci",
    "data": "2026-10-19",
    "inicio": "09:20",
    "fim": "09:40",
    "local": "Sala Mila Fang — Biblioteca — Quatá 300"
  },
  "thaisrl1": {
    "nome": "Thaís Rezende Lorena",
    "data": "2026-10-19",
    "inicio": "09:40",
    "fim": "10:00",
    "local": "Sala “Reunião 03” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "carloselfs": {
    "nome": "Carlos Eduardo Lima Franco da Silva",
    "data": "2026-10-19",
    "inicio": "13:00",
    "fim": "13:20",
    "local": "Sala “Reunião 04” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "pedroacfa": {
    "nome": "Pedro Augusto Cruz Faria Alves",
    "data": "2026-10-19",
    "inicio": "13:20",
    "fim": "13:40",
    "local": "Sala “Reunião 04” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "rafaelsa9": {
    "nome": "Rafael Souto Azevedo",
    "data": "2026-10-19",
    "inicio": "13:40",
    "fim": "14:00",
    "local": "Sala “Reunião 04” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "valentinarbpm": {
    "nome": "Valentina Rosa Boni Pessolato Mioto",
    "data": "2026-10-19",
    "inicio": "14:00",
    "fim": "14:20",
    "local": "Sala “Reunião 04” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "rafaelaam1": {
    "nome": "Rafaela Abbud Melillo",
    "data": "2026-10-19",
    "inicio": "14:20",
    "fim": "14:40",
    "local": "Sala “Reunião 04” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "pedropag": {
    "nome": "Pedro Pardo Amaral Gomes",
    "data": "2026-10-19",
    "inicio": "15:00",
    "fim": "15:20",
    "local": "Sala “Reunião 04” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "jhonathangl": {
    "nome": "Jhonathan Goncalves Lopes",
    "data": "2026-10-19",
    "inicio": "15:40",
    "fim": "16:00",
    "local": "Sala “Reunião 04” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "joaovs10": {
    "nome": "Joao Victor dos Santos",
    "data": "2026-10-20",
    "inicio": "10:00",
    "fim": "10:20",
    "local": "Sala “Reunião 01” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "analmn1": {
    "nome": "Ana Laura Matias Nader",
    "data": "2026-10-20",
    "inicio": "10:30",
    "fim": "10:50",
    "local": "Sala “Reunião 01” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "carloseccb": {
    "nome": "Carlos Eduardo Comenale Carrara Bouchabki",
    "data": "2026-10-20",
    "inicio": "12:10",
    "fim": "12:30",
    "local": "a confirmar"
  },
  "isabellaas1": {
    "nome": "Isabella Araujo Soares",
    "data": "2026-10-20",
    "inicio": "14:00",
    "fim": "14:20",
    "local": "Sala “Reunião 01” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "vincell": {
    "nome": "Vince de Luca Liu",
    "data": "2026-10-20",
    "inicio": "14:20",
    "fim": "14:40",
    "local": "Sala “Reunião 01” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "felipers10": {
    "nome": "Felipe Ribeiro Soerensen",
    "data": "2026-10-20",
    "inicio": "14:40",
    "fim": "15:00",
    "local": "Sala “Reunião 01” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "diegogts": {
    "nome": "Diego Greco Teti Siqueira",
    "data": "2026-10-20",
    "inicio": "15:00",
    "fim": "15:20",
    "local": "Sala “Reunião 01” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "luizatnr": {
    "nome": "Luiza Tozzo Nakai Ribeiro",
    "data": "2026-10-20",
    "inicio": "19:00",
    "fim": "19:20",
    "local": "Sala “Reunião 07” — 2º andar, Quatá 200"
  },
  "dorapm": {
    "nome": "Dora Paione Milner",
    "data": "2026-10-20",
    "inicio": "19:20",
    "fim": "19:40",
    "local": "Sala “Reunião 07” — 2º andar, Quatá 200"
  },
  "ruancos": {
    "nome": "Ruan Cesar Oliveira da Silva",
    "data": "2026-10-20",
    "inicio": "19:40",
    "fim": "20:00",
    "local": "Sala “Reunião 07” — 2º andar, Quatá 200"
  },
  "mariaertv": {
    "nome": "Maria Eduarda Reale Tallavasso Vassovinio",
    "data": "2026-10-21",
    "inicio": "13:40",
    "fim": "14:00",
    "local": "Sala “Reunião 01” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "isadorampg": {
    "nome": "Isadora Matos Pires Guerra",
    "data": "2026-10-21",
    "inicio": "14:20",
    "fim": "14:40",
    "local": "Sala “Reunião 01” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "luiserah": {
    "nome": "Luis Ernesto Rowland Abreu Hudson",
    "data": "2026-10-21",
    "inicio": "14:40",
    "fim": "15:00",
    "local": "Sala “Reunião 01” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "sophiaebs": {
    "nome": "Sophia Elisa Batista dos Santos",
    "data": "2026-10-21",
    "inicio": "19:00",
    "fim": "19:20",
    "local": "Sala “Reunião 03” — 3º andar, Quatá 200"
  },
  "juliacvf": {
    "nome": "Julia de Carvalho Vexel Fontes",
    "data": "2026-10-21",
    "inicio": "19:20",
    "fim": "19:40",
    "local": "Sala “Reunião 03” — 3º andar, Quatá 200"
  },
  "giovannasf3": {
    "nome": "Giovanna da Silva Ferraz",
    "data": "2026-10-21",
    "inicio": "19:40",
    "fim": "20:00",
    "local": "Sala “Reunião 03” — 3º andar, Quatá 200"
  },
  "nicolemm2": {
    "nome": "Nicole Marques Machado",
    "data": "2026-10-22",
    "inicio": "13:00",
    "fim": "13:20",
    "local": "Sala “Reunião 04” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "mariacsb3": {
    "nome": "Maria Clara Siqueira Barros",
    "data": "2026-10-22",
    "inicio": "13:20",
    "fim": "13:40",
    "local": "Sala “Reunião 04” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "lucaska": {
    "nome": "Lucas Kjaer Arippol",
    "data": "2026-10-22",
    "inicio": "13:40",
    "fim": "14:00",
    "local": "Sala “Reunião 04” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "ceciliasg2": {
    "nome": "Cecilia dos Santos Goes",
    "data": "2026-10-22",
    "inicio": "14:00",
    "fim": "14:20",
    "local": "Sala “Reunião 04” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "djairodsf": {
    "nome": "Djairo Dantas da Silva Filho",
    "data": "2026-10-22",
    "inicio": "14:20",
    "fim": "14:40",
    "local": "Sala “Reunião 04” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "beatrizbsa": {
    "nome": "Beatriz Benigna Sales Armstrong",
    "data": "2026-10-22",
    "inicio": "14:40",
    "fim": "15:00",
    "local": "Sala “Reunião 04” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "arturcp1": {
    "nome": "Artur Cortes Panhoca",
    "data": "2026-10-22",
    "inicio": "15:00",
    "fim": "15:20",
    "local": "Sala “Reunião 04” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "juliamh2": {
    "nome": "Julia Mendes Huber",
    "data": "2026-10-22",
    "inicio": "15:20",
    "fim": "15:40",
    "local": "Sala “Reunião 04” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "luisalcs": {
    "nome": "Luis Antonio Leal Coelho Siciliano",
    "data": "2026-10-22",
    "inicio": "15:40",
    "fim": "16:00",
    "local": "Sala “Reunião 04” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "lucassm16": {
    "nome": "Lucas Serra Marchesini",
    "data": "2026-10-22",
    "inicio": "16:40",
    "fim": "17:00",
    "local": "Sala “Reunião 04” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "rafaelactf": {
    "nome": "Rafaela Coelho Tosetto Fagundes",
    "data": "2026-10-22",
    "inicio": "17:00",
    "fim": "17:20",
    "local": "Sala “Reunião 04” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "luigimv": {
    "nome": "Luigi Montini Verderio",
    "data": "2026-10-22",
    "inicio": "17:20",
    "fim": "17:40",
    "local": "Sala “Reunião 04” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "manoelass1": {
    "nome": "Manoela Sola Saragoca",
    "data": "2026-10-22",
    "inicio": "18:30",
    "fim": "18:50",
    "local": "Sala “Reunião 04” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "luisatc3": {
    "nome": "Luis Akissue Teixeira Cintra",
    "data": "2026-10-22",
    "inicio": "19:00",
    "fim": "19:20",
    "local": "Sala “Reunião 04” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "raphaelaea": {
    "nome": "Raphaela Elisabete Avi",
    "data": "2026-10-22",
    "inicio": "19:20",
    "fim": "19:40",
    "local": "Sala “Reunião 04” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "eronms": {
    "nome": "Eron de Miranda Stawinski",
    "data": "2026-10-22",
    "inicio": "20:00",
    "fim": "20:20",
    "local": "Sala “Reunião 04” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "gabrielarb5": {
    "nome": "Gabriela Rocha Bezerra",
    "data": "2026-10-23",
    "inicio": "09:30",
    "fim": "09:50",
    "local": "Sala “Reunião 01” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "cristtianar": {
    "nome": "Cristtian Araujo Rocha",
    "data": "2026-10-23",
    "inicio": "09:50",
    "fim": "10:10",
    "local": "Sala “Reunião 01” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "ninaqc": {
    "nome": "Nina Querino Cuevas",
    "data": "2026-10-23",
    "inicio": "10:10",
    "fim": "10:30",
    "local": "Sala “Reunião 01” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "manuelapc": {
    "nome": "Manuela Paschoal Cateb",
    "data": "2026-10-23",
    "inicio": "10:30",
    "fim": "10:50",
    "local": "Sala “Reunião 01” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "enzofb": {
    "nome": "Enzo Fernandes Brito",
    "data": "2026-10-26",
    "inicio": "09:20",
    "fim": "09:40",
    "local": "Sala “Reunião 03” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "andremmra": {
    "nome": "Andre Marques Moraes Ramos de Assumpcao",
    "data": "2026-10-26",
    "inicio": "09:40",
    "fim": "10:00",
    "local": "Sala “Reunião 03” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "lauraacd": {
    "nome": "Laura Assis Cosenza Dourado",
    "data": "2026-10-26",
    "inicio": "10:00",
    "fim": "10:20",
    "local": "a confirmar"
  },
  "anacb8": {
    "nome": "Ana Clara Bernardes",
    "data": "2026-10-26",
    "inicio": "13:20",
    "fim": "13:40",
    "local": "Sala “Reunião 03” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "mariacbs3": {
    "nome": "Maria Clara Brisda dos Santos",
    "data": "2026-10-26",
    "inicio": "15:20",
    "fim": "15:40",
    "local": "Sala “Reunião 03” — Quatá 300 — térreo do Edifício Claudio Haddad"
  },
  "joaoplb2": {
    "nome": "Joao Pedro Leite de Brito",
    "data": "2026-10-26",
    "inicio": "15:40",
    "fim": "16:00",
    "local": "Sala “Reunião 03” — Quatá 300 — térreo do Edifício Claudio Haddad"
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

    const usuario = entrada;

    if (!Object.hasOwn(entrevistas, usuario)) {
        mostrarErro("Usuário não encontrado. Confira seu usuário do Insper.");
        return;
    }

    const entrevista = entrevistas[usuario];
    const saudacao = document.createElement("p");
    const nome = document.createElement("strong");
    nome.textContent = entrevista.nome;
    saudacao.append("Prezado ", nome, ", segue a confirmação do seu agendamento:");

    const data = new Date(entrevista.data + "T12:00:00-03:00");
    const dataFormatada = new Intl.DateTimeFormat("pt-BR", {
        day: "numeric", month: "long", timeZone: "America/Sao_Paulo"
    }).format(data);
    const local = entrevista.local.trim() || LOCAL_PADRAO.trim() || "a confirmar";
    const localFormatado = local.toLowerCase() === "a confirmar" ? "a confirmar" : local;
    const detalhes = document.createElement("ul");
    const campos = [
        ["📅 Data e horário da entrevista:", `${dataFormatada}, ${entrevista.inicio}`],
        ["📍Local:", localFormatado.endsWith(".") ? localFormatado : `${localFormatado}.`]
    ];
    for (const [rotulo, valor] of campos) {
        const item = document.createElement("li");
        const destaque = document.createElement("strong");
        destaque.textContent = rotulo;
        item.append(destaque, ` ${valor}`);
        detalhes.append(item);
    }

    const despedida = document.createElement("p");
    despedida.textContent = "Nos vemos em breve! 💙";
    const assinatura = document.createElement("p");
    assinatura.className = "assinatura";
    const equipe = document.createElement("strong");
    equipe.textContent = "Equipe de Experiência Internacional & Equipe Buddy Program";
    const area = document.createElement("em");
    area.textContent = "Student Life";
    assinatura.append(equipe, document.createElement("br"), area);
    resultado.append(saudacao, detalhes, despedida, assinatura);
}

document.getElementById("busca").addEventListener("submit", (evento) => {
    evento.preventDefault();
    mostrarMensagem();
});


