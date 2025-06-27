<script>
    export let data;
</script>

<form method="POST">
    <lael>Mensagem: <input type="text" name="mensagem" /></lael>
    <button type="submit">Enviar</button>
</form>

{#if data?.mensagem}
<p style="color: green;">{data.mensagem}</p>
{:else if data?.erro}
    <p style="color: red;">{data.erro}</p>
{/if}