
<script>    
let { form } = $props();
</script>
<h2>Cadastro de usuario</h2>
<form method="POST">
    <div class="letra1">
    <input name="nome" type="text" placeholder="Nome do Produto" value={form?.nome || ''} required/>
    <input name="money" type="text" placeholder="R$00,00" value={form?.money || ''} required/>
    <input name="quant" type="number" placeholder="quantidade" value={form?.quant || ''} required/>
    
    <button>Cadastrar</button>
    </div>
</form>



{#if form?.sucesso.length > 0}
 {#each form.sucesso as erro}
    <p style="color: green">{sucesso}</p>
    {/each}
    {/if}

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


