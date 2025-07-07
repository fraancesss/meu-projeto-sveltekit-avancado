<!-- src/routes/04/pokemon/[name]/+page.svelte -->
<script>
  export let data;
  let p = data.pokemon;
</script>

<h2 class="text-capitalize">{p.name}</h2>
<img src={p.image} alt={p.name} />
<p><strong>Altura:</strong> {p.height / 10} m</p>
<p><strong>Peso:</strong> {p.weight / 10} kg</p>
<p><strong>Tipos:</strong> {p.types.join(', ')}</p>
<p><strong>Habilidades:</strong> {p.abilities.join(', ')}</p>
