<script lang="ts">
    import { page } from '$app/stores';
    import { derived } from 'svelte/store';
  const email = derived(page, $page => $page.url.searchParams.get('email'));
  </script>
  

<title>Boas-Vindas</title>
<a>Gkds</a>

<div class="letra2">Bem vindo!! : )</div>
<div class="letra1">Seu email:{$email}</div>


<body>
    <style>
        body {
            background-image: url('https://wallpapers.com/images/hd/gravity-falls-cipher-dipper-deal-1m7iq4tadgz22bnj.webp');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            height: 90vh;
        }
        
    </style>
</body>