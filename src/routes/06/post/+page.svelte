<script>
  let { form } = $props();
</script>

<form method="POST">
  <input name="email" type="email" placeholder="E-mail de usuário" value={form?.email || ''} required />
  <input name="senha" type="password" placeholder="Senha" required />
  <button>Entrar</button>
</form>

{#if form?.error}
  <p style="color: red">{form.error}</p>
{/if}