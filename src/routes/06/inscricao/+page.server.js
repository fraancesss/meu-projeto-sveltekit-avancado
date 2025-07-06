import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const errors = {};

    const nome = (data.nome || '').trim();
    const numero = (data.numero || '').replace(/\s+/g, '');
    const validade = (data.validade || '').trim();
    const cvv = (data.cvv || '').trim();
    const plano = (data.plano || '').trim();

    // Validações
    if (nome.length < 3) {
      errors.nome = 'Mínimo 3 letras.';
    }

    if (!/^\d{16}$/.test(numero)) {
      errors.numero = 'Número inválido. Deve ter 16 dígitos.';
    }

    const validadeMatch = validade.match(/^(\d{2})\/(\d{2})$/);
    if (!validadeMatch) {
      errors.validade = 'Formato inválido. Use MM/AA.';
    } else {
      const [_, mm, aa] = validadeMatch;
      const month = parseInt(mm);
      const year = 2000 + parseInt(aa);
      const expiryDate = new Date(year, month);
      const now = new Date();
      if (month < 1 || month > 12 || expiryDate <= now) {
        errors.validade = 'Data inválida ou expirada.';
      }
    }

    if (!/^\d{3}$/.test(cvv)) {
      errors.cvv = 'CVV inválido.';
    }

    if (!['basico', 'intermediario', 'premium'].includes(plano)) {
      errors.plano = 'Plano inválido.';
    }

    if (Object.keys(errors).length > 0) {
      return fail(400, {
        data: { nome, numero, validade, cvv, plano },
        errors
      });
    }

    // Redireciona para a página do plano
    throw redirect(303, `/06/inscricao/${plano}`);
  }
};
