<script>
  export let form;
</script>

{#if form?.error}
  <p class="error">{form.error}</p>
{/if}

{#if form?.sucesso}
  <p class="success">Produto {form.produto} cadastrado com sucesso!</p>
{/if}
<div class="letra3">
    
<form method="POST" class="form">
  <div>

    <label for="nome">Nome do Produto:</label><input id="nome" name="nome" type="text" value={form?.nome || ''} required />
    
  </div>

  <div>
    <label for="preco">Preço:</label> <input id="preco" name="preco" type="number" step="0.01" value={form?.preco || ''} required />
   
  </div>

  <div>
    <label for="quantidade">Quantidade em Estoque:</label>
    <input id="quantidade" name="quantidade" type="number" value={form?.quantidade || ''} required />
  </div>

  <button type="submit">Cadastrar Produto</button>
</form>
</div>
<style>
  .form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    gap: 1rem;
  }
  .error {
    color: red;
    font-weight: bold;
  }
  .success {
    color: green;
    font-weight: bold;
  }
</style>
