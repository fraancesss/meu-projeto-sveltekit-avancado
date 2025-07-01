import { fail, redirect } from '@sveltejs/kit' ;


function contem(texto, caracteres) {
    for (const caractere of caracteres)
        if (texto.includes(caractere)) return true ;
    return false ;
}


export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const dados = {
            nome: data.get ('nome'), money: data.get ('money'), quant: data.get ('quant'), erros: []
        }
        if (!dados.nome || !dados.money || !dados.quant) dados.erros.push ('preencha todos os campos.') ;
        
        
       
       


            if (dados.erros.length > 0 ) return fail (400, dados) ;


            
    }
};

