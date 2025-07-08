export async function load({ url }) {
  const limit = 12;
  const offset = Number(url.searchParams.get('offset')) || 0;
  const search = url.searchParams.get('search');

  if (search) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);
    if (!res.ok) {
      return { pokemons: [], offset: 0, limit, hasNext: false, hasPrev: false, search };
    }

    const p = await res.json();
    const pokemon = {
      name: p.name,
      image: p.sprites.front_default
    };

    return {
      pokemons: [pokemon],
      offset: 0,
      limit,
      hasNext: false,
      hasPrev: false,
      search
    };
  }

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
  const data = await res.json();

  for (const pokemon of data.results) {
    const id = pokemon.url.split('/').at(-2);
    pokemon.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  return { pokemons: data.results, offset, limit, hasNext: offset + limit < data.count, hasPrev: offset > 0 };
}