<script>    
let { form } = $props();
</script>
<h2>Cadastro de usuario</h2>
<form method="POST">
    <input name="nome" type="text" placeholder="Nome de usuário" value={form?.nome || ''} required/>
    <input name="preco" type="preco" placeholder="Informe um Preco" value={form?.preco || ''} required/>
    <input name="quantidade" type="number" value={form?.quantiade || ''} required/>
    <button>Cadastrar</button>
</form>


{#if form?.sucesso}
    <p style="color: green">Produto {form.produto} cadastrado com sucesso!</p>
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


