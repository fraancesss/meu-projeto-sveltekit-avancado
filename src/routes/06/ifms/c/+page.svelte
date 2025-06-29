<script lang="ts">
  import { page } from '$app/stores';
  import { derived } from 'svelte/store';


  const data = derived(page, $page => $page.url.searchParams.get('umadata'));
</script>



<div class="letra2">Bem vindo!! : )</div>
<div class="letra1">Seu DATA: {$data}</div>







<body>
    <style>
        body {
            background-image: url('https://wallpapers.com/images/hd/stanford-creepy-weird-gravity-falls-s0zcpu3gr2mz2fph.webp');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            height: 90vh;
        }
        
    </style>
</body>