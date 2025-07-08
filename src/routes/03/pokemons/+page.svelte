<script>
  let { data } = $props();
  let buscar = $state(data.search || '');
</script>

<form method="GET" class="mb-4">
<input type="text" name="search" placeholder="Busca por nome..." bind:value={buscar} class="form-control" />
<br>
<button type="submit" class="btn btn-success">Buscar</button>
</form>

<div class="row">
  {#each data.pokemons as p}
    <div class="col-md-3 col-sm-6 mb-3">
      <div class="card">
        <img src={p.image} alt={p.name} class="card-img-top" />
        <div class="card-body">
          <a href="/03/pokemons/{p.name}" class="stretched-link text-decoration-none">
            <h5 class="card-title text-capitalize">{p.name}</h5>
          </a>
        </div>
      </div>
    </div>
  {/each}
</div>

{#if !data.search}
  <div class="mt-4">
    {#if data.hasPrev}
      <a href="?offset={data.offset - data.limit}">Anterior</a>
    {/if}

    {#if data.hasNext}
      <a href="?offset={data.offset + data.limit}" style="margin-left: 1rem;">Próximo</a>
    {/if}
  </div>
{/if}