export async function load({ params }) {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
    const pokemon = await res.json();
    
    return { pokemon };
  }