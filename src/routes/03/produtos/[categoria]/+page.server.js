import { produtos } from '$lib/server/03/produtos.js';
import { redirect } from '@sveltejs/kit';

export async function load({ params, url }) {
  const produtosFiltrados = produtos.filter((produtos) => produtos.titulo == params.categoria);

  const busca = url.searchParams.get('busca');
  console.log(busca);
  return { produtosFiltrados };
}

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const busca = data.get('busca');

    const produtosfiltradosbusca = produtos.filter((produtos) => produtos.titulo == busca);
    console.log(produtosfiltradosbusca.titulo)

    throw redirect(303, `/03/produtos/${produtosfiltradosbusca.titulo}`);
  }
};
