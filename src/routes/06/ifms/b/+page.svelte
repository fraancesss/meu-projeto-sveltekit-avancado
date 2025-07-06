<script lang="ts">
  import { page } from '$app/stores';
  import { derived } from 'svelte/store';


  const texto = derived(page, $page => $page.url.searchParams.get('umtexto'));
</script>



<div class="letra2">Bem vindo!! : )</div>
<div class="letra1">Seu Texto: {$texto}</div>



