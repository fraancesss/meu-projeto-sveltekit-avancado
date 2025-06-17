import { fail, redirect } from 'sveltejs/kit' ;


function contem(texto, caracteres) {
    for (const caractere of caracteres)
        if (texto.includes(caractere)) return true ;
    return false ;
}


export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const dados = {
            nome: data.get ('nome'), email: data. get ('email'),
            nascimento: data.get ('nascimento'), senha: data.get ('senha'),
            confirmacaosenha: data.get ('confirmacaosenha'), erros: []
        }
        if (!dados.nome || !dados.email || !dados.nascimento || !dados.senha || !dados.confirmacaosenha) dados.erros.push ('preencha todos os campos.') ;
        if (!dados.email.includes ('@')) dados.erros.push('email inválido.') ;
        if (dados.senha ! = dados.confirmacaosenha) dados.erros.push ('senhas não conferem.') ;
        if (!contem(dados.senha,"abcdefghijklmnopqrstuvwxyz")
            || !contem (dados.senha, "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
            || !contem (dados.senha, "0123456789")
            || !contem (dados.senha, "!@#$%¨&*()-_=+")
        )
            dados.erros.push ('A senha deve ter pelo menos uma letra maiuscula, uma minuscula, um numero e um caracte especial') ;
            let agora = new Date (), nasc = new Date (dados.nascimento) ;
            if (agora - nasc < 378691200000)
                dados.erros.push ('Você ainda não completou 12 anos!') ;
Q

            if (dados.erros.length > 0 ) return fail (400, dados) ;
    }
};

