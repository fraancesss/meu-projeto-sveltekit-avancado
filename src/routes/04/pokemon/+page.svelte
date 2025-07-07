<!-- src/routes/04/pokemon/+page.svelte -->
<script>
  import PokemonCard from '$lib/components/PokemonCard.svelte';
  export let data;

  let { pokemons, offset, limit, total, queryName, types, selectedType } = data;
</script>

<div class="mb-3">
  <form method="GET">
    <input type="text" name="name" placeholder="Buscar Pokémon..." value={queryName} class="form-control mb-2" />
    <select name="type" class="form-select mb-2">
      <option value="">Todos os Tipos</option>
      {#each types as t}
        <option value={t.name} selected={t.name === selectedType}>{t.name}</option>
      {/each}
    </select>
    <button type="submit" class="btn btn-primary">Buscar</button>
  </form>
</div>

<div class="row">
  {#if pokemons.length > 0}
    {#each pokemons as p}
      <PokemonCard {p} pokemon={p} />
    {/each}
  {:else}
    <p>Nenhum Pokémon encontrado.</p>
  {/if}
</div>

<!-- Paginação -->
<div class="mt-4 d-flex justify-content-between">
  {#if offset > 0}
    <a href="?offset={offset - limit}&name={queryName}&type={selectedType}" class="btn btn-secondary">Anterior</a>
  {/if}
  {#if offset + limit < total}
    <a href="?offset={offset + limit}&name={queryName}&type={selectedType}" class="btn btn-secondary">Próximo</a>
  {/if}
</div>
