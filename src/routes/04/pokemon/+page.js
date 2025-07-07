// src/routes/04/pokemon/+page.js
export async function load({ url, fetch }) {
  const limit = 12;
  const offset = Number(url.searchParams.get('offset') || 0);
  const queryName = url.searchParams.get('name')?.toLowerCase() || '';
  const selectedType = url.searchParams.get('type') || '';

  // Buscar tipos
  const typeRes = await fetch('https://pokeapi.co/api/v2/type');
  const typeData = await typeRes.json();
  const types = typeData.results;

  // Filtro por nome
  if (queryName) {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${queryName}`);
      if (!res.ok) throw new Error();
      const p = await res.json();
      const pokemon = {
        name: p.name,
        image: p.sprites.front_default,
      };
      return { pokemons: [pokemon], offset: 0, limit, total: 1, queryName, types, selectedType };
    } catch {
      return { pokemons: [], offset: 0, limit, total: 0, queryName, types, selectedType };
    }
  }

  // Filtro por tipo
  if (selectedType) {
    const typeRes = await fetch(`https://pokeapi.co/api/v2/type/${selectedType}`);
    const typeDetail = await typeRes.json();
    const allPokemon = typeDetail.pokemon.map(p => p.pokemon).slice(offset, offset + limit);
    const pokemons = await Promise.all(allPokemon.map(async (p) => {
      const id = p.url.split('/').at(-2);
      return {
        name: p.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
      };
    }));
    return {
      pokemons,
      offset,
      limit,
      total: typeDetail.pokemon.length,
      queryName,
      types,
      selectedType
    };
  }

  // Listagem padrão
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
  const data = await res.json();
  const pokemons = data.results.map(p => {
    const id = p.url.split('/').at(-2);
    return {
      name: p.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    };
  });

  return { pokemons, offset, limit, total: data.count, queryName, types, selectedType };
}
