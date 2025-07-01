
<script>    
let { form } = $props();
</script>
<h2>Cadastro de usuário</h2>
<form method="POST">
    <div class="letra1">
        <input name="cvv" type="text" placeholder="Código de segurança (CVV)" value={form?.cvv || ''} required />

        {#if form?.erros?.cvv}
            <p class="erro">{form.erros.cvv}</p>
        {/if}

        <button>Cadastrar</button>
    </div>
</form>


{#if form?.erros.length > 0}
 {#each form.erros as erro}
    <p style="color: red">{erro}</p>
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