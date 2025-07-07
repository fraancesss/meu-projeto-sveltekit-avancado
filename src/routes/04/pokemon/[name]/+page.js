// src/routes/04/pokemon/[name]/+page.js
export async function load({ params, fetch }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
  const data = await res.json();

  const pokemon = {
    name: data.name,
    image: data.sprites.front_default,
    height: data.height,
    weight: data.weight,
    types: data.types.map(t => t.type.name),
    abilities: data.abilities.map(a => a.ability.name),
  };

  return { pokemon };
}
