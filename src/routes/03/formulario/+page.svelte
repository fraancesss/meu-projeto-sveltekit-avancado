<script>
    let { data } = $props();
  </script>
  
  <form>
    <input name="fruta" placeholder="Qual tua fruta preferida?" />
    <input name="legume" placeholder="E legume?" />
    <input type="date" name="data" />
    <button>Buscar</button>
  </form>
  
  {#if data.fruta && data.legume}
    <p>Você gosta da fruta {data.fruta} e do legume {data.legume}.</p>
  {:else}
    <p>Informe uma fruta e um legume...</p>
  {/if}