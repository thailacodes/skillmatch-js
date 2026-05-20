// Objeto representando o candidato e seus requisitos

const candidato = {
    nome: "Thaila Campoy",
    area: "Desenvolvedora Front-End Junior",
    habilidades: ["JavaScript", "Css", "Html", "React", "Figma"],
    experienciaMeses: 4

}

// Array de objetos representando os requisitos solicitados

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

// Função para verificar se o candidato atende aos requisitos de cada vaga


/*preciso classificar a compatibilidade do candidato com as vagas de acordo com a porcentagem de habilidades encontradas em relação aos requisitos de cada empresa. A classificação será feita da seguinte forma:
80% a 100% - Alta Compatibilidade
50% a 79% - Compatibilidade Média
0% a 49% - Baixa Compatibilidade 
*/


function verificarCompatibilidade(candidato, empresas) {
    empresas.forEach(empresa => {
        const habilidadesEncontradas = candidato.habilidades.filter(habilidade => empresa.requisitos.includes(habilidade));
        const habilidadesFaltantes = empresa.requisitos.filter(requisito => !candidato.habilidades.includes(requisito));
        
        const compatibilidade = (habilidadesEncontradas.length / empresa.requisitos.length) * 100;
        let classificacao;

        //If e else para classificar a compatibilidade do candidato com as vagas de acordo com a porcentagem.

        if (compatibilidade >= 80) {
            classificacao = "Alta Compatibilidade";
        } else if (compatibilidade >= 50) {
            classificacao = "Compatibilidade Média";
        } else {
            classificacao = "Baixa Compatibilidade";
        }

        // Saida no console do resultado.

        console.log(`Empresa: ${empresa.nomeEmpresa}`);
        console.log(`Cargo: ${empresa.cargo}`);
        console.log(`Compatibilidade: ${compatibilidade.toFixed(2)}%`);
        console.log(`Habilidades encontradas: ${habilidadesEncontradas.join(", ")}`);
        console.log(`Habilidades faltantes: ${habilidadesFaltantes.join(", ")}`);
        console.log(`Classificação: ${classificacao}`);
        console.log('---');
    });
}

verificarCompatibilidade(candidato, empresas);