<script lang="ts">
  import { page } from '$app/stores';
  import { derived } from 'svelte/store';


  const data = derived(page, $page => $page.url.searchParams.get('umadata'));
</script>



<div class="letra2">Bem vindo!! : )</div>
<div class="letra1">Seu DATA: {$data}</div>






