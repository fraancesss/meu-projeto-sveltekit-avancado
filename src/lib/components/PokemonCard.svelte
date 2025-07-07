<!-- src/lib/components/PokemonCard.svelte -->
<script>
  export let pokemon;
</script>

<div class="col-md-3 col-sm-6 mb-3">
  <div class="card">
    <img src={pokemon.image} alt={pokemon.name} class="card-img-top" />
    <div class="card-body">
      <a href={`/04/pokemon/${pokemon.name}`} class="stretched-link text-decoration-none">
        <h5 class="card-title text-capitalize">{pokemon.name}</h5>
      </a>
    </div>
  </div>
</div>
