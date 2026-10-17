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
    "local": ""
  },
  "anams5": {
    "nome": "Ana de Medeiros Silvestre",
    "data": "2026-10-19",
    "inicio": "08:40",
    "fim": "09:00",
    "local": ""
  },
  "carolinae3": {
    "nome": "Carolina Eskenazi",
    "data": "2026-10-19",
    "inicio": "09:00",
    "fim": "09:20",
    "local": ""
  },
  "leonardofb": {
    "nome": "Leonardo Ferrante Baldacci",
    "data": "2026-10-19",
    "inicio": "09:20",
    "fim": "09:40",
    "local": ""
  },
  "thaisrl1": {
    "nome": "Thaís Rezende Lorena",
    "data": "2026-10-19",
    "inicio": "09:40",
    "fim": "10:00",
    "local": ""
  },
  "carloselfs": {
    "nome": "Carlos Eduardo Lima Franco da Silva",
    "data": "2026-10-19",
    "inicio": "13:00",
    "fim": "13:20",
    "local": ""
  },
  "pedroacfa": {
    "nome": "Pedro Augusto Cruz Faria Alves",
    "data": "2026-10-19",
    "inicio": "13:20",
    "fim": "13:40",
    "local": ""
  },
  "rafaelsa9": {
    "nome": "Rafael Souto Azevedo",
    "data": "2026-10-19",
    "inicio": "13:40",
    "fim": "14:00",
    "local": ""
  },
  "valentinarbpm": {
    "nome": "Valentina Rosa Boni Pessolato Mioto",
    "data": "2026-10-19",
    "inicio": "14:00",
    "fim": "14:20",
    "local": ""
  },
  "rafaelaam1": {
    "nome": "Rafaela Abbud Melillo",
    "data": "2026-10-19",
    "inicio": "14:20",
    "fim": "14:40",
    "local": ""
  },
  "pedropag": {
    "nome": "Pedro Pardo Amaral Gomes",
    "data": "2026-10-19",
    "inicio": "15:00",
    "fim": "15:20",
    "local": ""
  },
  "jhonathangl": {
    "nome": "Jhonathan Goncalves Lopes",
    "data": "2026-10-19",
    "inicio": "15:40",
    "fim": "16:00",
    "local": ""
  },
  "joaovs10": {
    "nome": "Joao Victor dos Santos",
    "data": "2026-10-20",
    "inicio": "10:00",
    "fim": "10:20",
    "local": ""
  },
  "analmn1": {
    "nome": "Ana Laura Matias Nader",
    "data": "2026-10-20",
    "inicio": "10:30",
    "fim": "10:50",
    "local": ""
  },
  "carloseccb": {
    "nome": "Carlos Eduardo Comenale Carrara Bouchabki",
    "data": "2026-10-20",
    "inicio": "12:10",
    "fim": "12:30",
    "local": ""
  },
  "isabellaas1": {
    "nome": "Isabella Araujo Soares",
    "data": "2026-10-20",
    "inicio": "14:00",
    "fim": "14:20",
    "local": ""
  },
  "vincell": {
    "nome": "Vince de Luca Liu",
    "data": "2026-10-20",
    "inicio": "14:20",
    "fim": "14:40",
    "local": ""
  },
  "felipers10": {
    "nome": "Felipe Ribeiro Soerensen",
    "data": "2026-10-20",
    "inicio": "14:40",
    "fim": "15:00",
    "local": ""
  },
  "diegogts": {
    "nome": "Diego Greco Teti Siqueira",
    "data": "2026-10-20",
    "inicio": "15:00",
    "fim": "15:20",
    "local": ""
  },
  "luizatnr": {
    "nome": "Luiza Tozzo Nakai Ribeiro",
    "data": "2026-10-20",
    "inicio": "19:00",
    "fim": "19:20",
    "local": ""
  },
  "dorapm": {
    "nome": "Dora Paione Milner",
    "data": "2026-10-20",
    "inicio": "19:20",
    "fim": "19:40",
    "local": ""
  },
  "ruancos": {
    "nome": "Ruan Cesar Oliveira da Silva",
    "data": "2026-10-20",
    "inicio": "19:40",
    "fim": "20:00",
    "local": ""
  },
  "mariaertv": {
    "nome": "Maria Eduarda Reale Tallavasso Vassovinio",
    "data": "2026-10-21",
    "inicio": "13:40",
    "fim": "14:00",
    "local": ""
  },
  "isadorampg": {
    "nome": "Isadora Matos Pires Guerra",
    "data": "2026-10-21",
    "inicio": "14:20",
    "fim": "14:40",
    "local": ""
  },
  "luiserah": {
    "nome": "Luis Ernesto Rowland Abreu Hudson",
    "data": "2026-10-21",
    "inicio": "14:40",
    "fim": "15:00",
    "local": ""
  },
  "sophiaebs": {
    "nome": "Sophia Elisa Batista dos Santos",
    "data": "2026-10-21",
    "inicio": "19:00",
    "fim": "19:20",
    "local": ""
  },
  "juliacvf": {
    "nome": "Julia de Carvalho Vexel Fontes",
    "data": "2026-10-21",
    "inicio": "19:20",
    "fim": "19:40",
    "local": ""
  },
  "giovannasf3": {
    "nome": "Giovanna da Silva Ferraz",
    "data": "2026-10-21",
    "inicio": "19:40",
    "fim": "20:00",
    "local": ""
  },
  "nicolemm2": {
    "nome": "Nicole Marques Machado",
    "data": "2026-10-22",
    "inicio": "13:00",
    "fim": "13:20",
    "local": ""
  },
  "mariacsb3": {
    "nome": "Maria Clara Siqueira Barros",
    "data": "2026-10-22",
    "inicio": "13:20",
    "fim": "13:40",
    "local": ""
  },
  "lucaska": {
    "nome": "Lucas Kjaer Arippol",
    "data": "2026-10-22",
    "inicio": "13:40",
    "fim": "14:00",
    "local": ""
  },
  "ceciliasg2": {
    "nome": "Cecilia dos Santos Goes",
    "data": "2026-10-22",
    "inicio": "14:00",
    "fim": "14:20",
    "local": ""
  },
  "djairodsf": {
    "nome": "Djairo Dantas da Silva Filho",
    "data": "2026-10-22",
    "inicio": "14:20",
    "fim": "14:40",
    "local": ""
  },
  "beatrizbsa": {
    "nome": "Beatriz Benigna Sales Armstrong",
    "data": "2026-10-22",
    "inicio": "14:40",
    "fim": "15:00",
    "local": ""
  },
  "arturcp1": {
    "nome": "Artur Cortes Panhoca",
    "data": "2026-10-22",
    "inicio": "15:00",
    "fim": "15:20",
    "local": ""
  },
  "juliamh2": {
    "nome": "Julia Mendes Huber",
    "data": "2026-10-22",
    "inicio": "15:20",
    "fim": "15:40",
    "local": ""
  },
  "luisalcs": {
    "nome": "Luis Antonio Leal Coelho Siciliano",
    "data": "2026-10-22",
    "inicio": "15:40",
    "fim": "16:00",
    "local": ""
  },
  "lucassm16": {
    "nome": "Lucas Serra Marchesini",
    "data": "2026-10-22",
    "inicio": "16:40",
    "fim": "17:00",
    "local": ""
  },
  "rafaelactf": {
    "nome": "Rafaela Coelho Tosetto Fagundes",
    "data": "2026-10-22",
    "inicio": "17:00",
    "fim": "17:20",
    "local": ""
  },
  "luigimv": {
    "nome": "Luigi Montini Verderio",
    "data": "2026-10-22",
    "inicio": "17:20",
    "fim": "17:40",
    "local": ""
  },
  "manoelass1": {
    "nome": "Manoela Sola Saragoca",
    "data": "2026-10-22",
    "inicio": "18:30",
    "fim": "18:50",
    "local": ""
  },
  "luisatc3": {
    "nome": "Luis Akissue Teixeira Cintra",
    "data": "2026-10-22",
    "inicio": "19:00",
    "fim": "19:20",
    "local": ""
  },
  "raphaelaea": {
    "nome": "Raphaela Elisabete Avi",
    "data": "2026-10-22",
    "inicio": "19:20",
    "fim": "19:40",
    "local": ""
  },
  "eronms": {
    "nome": "Eron de Miranda Stawinski",
    "data": "2026-10-22",
    "inicio": "20:00",
    "fim": "20:20",
    "local": ""
  },
  "gabrielarb5": {
    "nome": "Gabriela Rocha Bezerra",
    "data": "2026-10-23",
    "inicio": "09:30",
    "fim": "09:50",
    "local": ""
  },
  "cristtianar": {
    "nome": "Cristtian Araujo Rocha",
    "data": "2026-10-23",
    "inicio": "09:50",
    "fim": "10:10",
    "local": ""
  },
  "ninaqc": {
    "nome": "Nina Querino Cuevas",
    "data": "2026-10-23",
    "inicio": "10:10",
    "fim": "10:30",
    "local": ""
  },
  "manuelapc": {
    "nome": "Manuela Paschoal Cateb",
    "data": "2026-10-23",
    "inicio": "10:30",
    "fim": "10:50",
    "local": ""
  },
  "enzofb": {
    "nome": "Enzo Fernandes Brito",
    "data": "2026-10-26",
    "inicio": "09:20",
    "fim": "09:40",
    "local": ""
  },
  "andremmra": {
    "nome": "Andre Marques Moraes Ramos de Assumpcao",
    "data": "2026-10-26",
    "inicio": "09:40",
    "fim": "10:00",
    "local": ""
  },
  "lauraacd": {
    "nome": "Laura Assis Cosenza Dourado",
    "data": "2026-10-26",
    "inicio": "10:00",
    "fim": "10:20",
    "local": ""
  },
  "anacb8": {
    "nome": "Ana Clara Bernardes",
    "data": "2026-10-26",
    "inicio": "13:20",
    "fim": "13:40",
    "local": ""
  },
  "mariacbs3": {
    "nome": "Maria Clara Brisda dos Santos",
    "data": "2026-10-26",
    "inicio": "15:20",
    "fim": "15:40",
    "local": ""
  },
  "joaoplb2": {
    "nome": "Joao Pedro Leite de Brito",
    "data": "2026-10-26",
    "inicio": "15:40",
    "fim": "16:00",
    "local": ""
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
    const titulo = document.createElement("h2");
    titulo.textContent = entrevista.nome;
    const detalhes = document.createElement("dl");
    const data = new Date(entrevista.data + "T12:00:00-03:00");
    const campos = [
        ["Data", new Intl.DateTimeFormat("pt-BR", {
            weekday: "long", day: "2-digit", month: "2-digit", year: "numeric",
            timeZone: "America/Sao_Paulo"
        }).format(data)],
        ["Horário", `${entrevista.inicio} às ${entrevista.fim} (horário de Brasília)`],
        ["Local", entrevista.local.trim() || LOCAL_PADRAO.trim() || "A confirmar"]
    ];
    for (const [rotulo, valor] of campos) {
        const termo = document.createElement("dt");
        termo.textContent = rotulo;
        const descricao = document.createElement("dd");
        descricao.textContent = valor;
        detalhes.append(termo, descricao);
    }
    resultado.append(titulo, detalhes);
}

document.getElementById("busca").addEventListener("submit", (evento) => {
    evento.preventDefault();
    mostrarMensagem();
});

