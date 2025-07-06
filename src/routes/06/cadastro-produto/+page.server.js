import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const nome = formData.get('nome')?.trim();
    const preco = parseFloat(formData.get('preco'));
    const quantidade = parseInt(formData.get('quantidade'), 10);

    // Validações
    if (!nome) {
      return fail(400, { error: 'Nome obrigatório.', nome, preco: formData.get('preco'), quantidade: formData.get('quantidade') });
    }

    if (isNaN(preco) || preco <= 0) {
      return fail(400, { error: 'Preço inválido.', nome, preco: formData.get('preco'), quantidade: formData.get('quantidade') });
    }

    if (isNaN(quantidade) || !Number.isInteger(quantidade) || quantidade < 1) {
      return fail(400, { error: 'Quantidade inválida.', nome, preco: formData.get('preco'), quantidade: formData.get('quantidade') });
    }

    // Sucesso
    return {
      sucesso: true,
      produto: nome
    };
  }
};
