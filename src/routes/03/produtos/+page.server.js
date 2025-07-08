import { produtos } from '$lib/server/03/produtos.js';

export async function load() {
  const allprodutos = produtos;
  return { allprodutos };
}
