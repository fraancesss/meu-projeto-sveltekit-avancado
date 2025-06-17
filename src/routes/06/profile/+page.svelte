<script lang="ts">
    import { page } from '$app/stores';
    import { derived } from 'svelte/store';
  const email = derived(page, $page => $page.url.searchParams.get('email'));
  </script>
  

<title>Boas-Vindas</title>


<div class="letra2">Bem vindo!! : )</div>
<div class="letra1">Seu email:{$email}</div>



<body>


    
        <style>
            body {
                background-image: url('https://images3.alphacoders.com/135/thumb-1920-1350256.jpeg');
                background-size: cover;
                background-position: center;
                background-attachment: fixed;
                height: 90vh;
            }
            
        </style>
    

</body>
