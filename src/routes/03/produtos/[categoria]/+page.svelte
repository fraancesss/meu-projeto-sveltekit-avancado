<script>
  let { data } = $props();
  let busca = $state(data.busca || '');
</script>

{#each data.produtosFiltrados as produto}
  <h1>{produto.titulo}</h1>
  {produto.descricao}
  <h1 style="color: green;">R${produto.preco}</h1>
  <button type="button" class="btn btn-primary">Comprar</button>
  <br />
  Categorias do produto:
  <br />
  {#each produto.categorias as categoria}
    <span class="badge text-bg-primary">{categoria}</span>
  {/each}
{/each}
<hr>
<form method="POST">
    <input type="text" name="busca" placeholder="Buscar produto por título ou descrição." />
    <button>Enviar</button>
  </form>