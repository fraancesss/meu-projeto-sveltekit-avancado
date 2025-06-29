<script lang="ts">
  import { page } from '$app/stores';
  import { derived } from 'svelte/store';


  const numero = derived(page, $page => $page.url.searchParams.get('umnumero'));
</script>



<div class="letra2">Bem vindo!! : )</div>
<div class="letra1">Seu número: {$numero}</div>





<body>
    <style>
        body {
             margin: 0;
            padding: 0;
            background-image: url('https://images.steamusercontent.com/ugc/2501272149854200488/009BA3D28A8D0D9DC193743F9F500FC5AB5A2D60/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            height: 100vh;
        }
        
    </style>
</body>


