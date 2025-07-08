<script>
  let { data } = $props();
  console.log(data);
</script>

{#each data.allprodutos as produto}
  <a href="/03/produtos/{produto.titulo}">{produto.titulo}</a>
  <br />
{/each}
