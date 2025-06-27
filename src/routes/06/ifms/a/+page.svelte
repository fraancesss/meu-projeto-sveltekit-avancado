<script lang="ts">
    import { page } from '$app/stores';
    import { derived } from 'svelte/store';
  const email = derived(page, $page => $page.url.searchParams.get('email'));
  </script>
  

<title>Boas-Vindas</title>
<a>Gkds</a>

<div class="letra2">Bem vindo!! : )</div>
<div class="letra1">Seu email:{$email}</div>


