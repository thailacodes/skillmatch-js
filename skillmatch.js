/* exemplo:

const candidato = {
    nome: "Ana",
    area:"Front-End",
    habilidades: ["JavaScript", "GitHub", "Lógica de Programação", "Kanban"],
    experienciaMeses: 3
}; */

// Objeto representando o candidato e seus requisitos para a vaga de Desenvolvedor Front-End Junior
//RF01 - Criar o perfil do candidato
let candidato = {
    nome: "Thaila Campoy",
    area: "Desenvolvedora Front-End Junior",
    habilidades: ["JavaScript", "Css", "Html", "React", "Figma"],
    experienciaMeses: 4

};
//RF02 - Criar uma lista de vagas.
// Array de objetos representando os requisitos solicitados. Exemplo usado de acordo com o documento do projeto.

const empresas = [
    {
        id:1,
        nomeEmpresa: " Catarinense Convenios",
        cargo: " Desenvolvedor Front-End Junior para criacao de site",
        requisitos: ["JavaScript", "Css", "Html", "React", "Figma"],
        salario: 2500,
        modalidade: "Presencial",
        local: "Brusque, SC"
    },

    {
        id:2,
        nomeEmpresa:"Amazon Technology",
        cargo: "Desenvolvedor Front-End Junior",
        requisitos: ["Git", "JavaScript", "Css", "Html", "React"],
        salario: 1900,
        modalidade: "Híbrido",
        local: "Itajaí, SC"
    },

    { 
        id:3,
        nomeEmpresa: "Google",
        cargo: "Estagiário para Programador JavaScript",
        requisitos: ["JavaScript", "Arrays", "Objetos" , "Funções", "DOM"],
        salario: 2200,
        modalidade: "Remoto",
        local: "Brusque, SC"
    },
    {
        id:4,
        nomeEmpresa: "Bubble Labs",
        cargo: "Desenvolvedor Front-End Junior",
        requisitos: ["JavaScript", "Objetos", "Arrays", "Funções", "React"],
        salario: 3000,
        modalidade: "Remoto",
        local: " Florianópolis, SC"
    }
]

// RF03 - Calcular compatibilidade 
function calcularCompatibilidade(candidato, vaga) {
    const requisitosAtendidos = vaga.requisitos.filter(requisito => candidato.habilidades.includes(requisito)).length;
    const totalRequisitos = vaga.requisitos.length;
    const compatibilidade = (requisitosAtendidos / totalRequisitos) * 100;
    return compatibilidade.toFixed(2);
}

// RF04 - Classificar compatibilidade 
function classificarCompatibilidade(percentual) {
    if (percentual >= 80) {
        return "Alta compatibilidade";
    } else if (percentual >= 50) {
        return "Média compatibilidade";
    } else {
        return "Baixa compatibilidade";
    }
}
// RF05 - Listar habilidades faltantes
function listarHabilidadesFaltantes(candidato, vaga) {
    return vaga.requisitos.filter(requisito => !candidato.habilidades.includes(requisito));
}

// RF06 - Encontrar a vaga com maior compatibilidade
function encontrarMelhorVaga(resultados) {
    return resultados.reduce((melhor, atual) => {
        return parseFloat(atual.compatibilidade) > parseFloat(melhor.compatibilidade) ? atual : melhor;
    });
}

// RF07 - Gerar recomendação de estudo
function gerarRecomendacao(candidato, empresas) {
    const todasFaltantes = empresas.map(vaga => listarHabilidadesFaltantes(candidato, vaga));
    const listaUnica = [...new Set(todasFaltantes.flat())];
    
    if (listaUnica.length > 0) {
        return "Priorize estudar " + listaUnica.join(", ") + ", pois esses conteúdos aparecem nas vagas analisadas.";
    } else {
        return "Parabéns! Você atende todos os requisitos das vagas analisadas.";
    }
}

//RF09 - Classe
class Vaga {
    constructor(id, nomeEmpresa, cargo, requisitos, salario, modalidade, local) {
        this.id = id;
        this.nomeEmpresa = nomeEmpresa;
        this.cargo = cargo;
        this.requisitos = requisitos;
        this.salario = salario;
        this.modalidade = modalidade;
        this.local = local;
    }

    exibirResumo() {
        return this.cargo + " na empresa " + this.nomeEmpresa;
    }
}

// RF10 - Herança
class VagaFrontEnd extends Vaga {
    constructor(id, nomeEmpresa, cargo, requisitos, salario, modalidade, local, nivel) {
        super(id, nomeEmpresa, cargo, requisitos, salario, modalidade, local);
        this.nivel = nivel;
    }

    exibirNivel() {
        return "Nível da vaga: " + this.nivel;
    }
}