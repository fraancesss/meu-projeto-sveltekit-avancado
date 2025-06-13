<script>    
let { form } = $props();
</script>
<h2>Cadastro de usuarui</h2>
<form method="POST">
    <input name="nome" type="text" placeholder="Nome de usuário" value={for?.nome || ''} required/>
    <input name="email" type="email" placeholder="E-mail de usuário" value={for?.email || ''} required/>
    <input name="senha" type="password" placeholder="Senha" value={for?.confirmacaosenha || ''} required/>
    <input name="confirmacaosenha" type="password" placeholder="Confirmação de senha" value={for?.confirmacaosenha || ''} required/>
    <input name="nacimento" type="date" value={form?.nascimento || ''} required/>
    <button>Cadastrar</button>
</form>

{#if form?.erros.length > 0}
    {#each form.erros as erro}
    <p style="color: red">{erro}</p>
    {/each}
    {/if}