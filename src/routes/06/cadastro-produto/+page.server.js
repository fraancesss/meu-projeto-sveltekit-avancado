import { fail, redirect } from '@sveltejs/kit';

function contem(texto, caracteres) {
    for (const caractere of caracteres)
        if (texto.includes(caractere)) return true;
    return false;
}

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const dados = {
            nome: data.get('nome'),
            preco: data.get('preco'),
            quantidade: data.get('quantidade'),
            erros: []
        };

        if (!dados.nome || !dados.preco || !dados.quantidade) {
            dados.erros.push('Preencha todos os campos.');
        }
        if (!dados.preco.includes('R$')) {
            dados.erros.push('Preço inválido.');
        }

        const quant = parseInt(dados.quantidade, 10);
        if (quant < 1) {
            dados.erros.push('Você precisa colocar uma quantidade acima de 1.');
        }

        if (dados.erros.length > 0) {
            return fail(400, dados); 
        }

        
    }
};
