<script lang="ts">
  export let form;
</script>
<div class="letra3">
<form method="POST" class="form">
  <div>
    <label>Nome no Cartão:</label>
    <input name="nome" value={form?.data?.nome || ''} required />
    {#if form?.errors?.nome}
      <p class="error">{form.errors.nome}</p>
    {/if}
  </div>

  <div>
    <label>Número do Cartão:</label>
    <input name="numero" maxlength="16" value={form?.data?.numero || ''} required />
    {#if form?.errors?.numero}
      <p class="error">{form.errors.numero}</p>
    {/if}
  </div>

  <div>
    <label>Data de Validade (MM/AA):</label>
    <input name="validade" placeholder="MM/AA" value={form?.data?.validade || ''} required />
    {#if form?.errors?.validade}
      <p class="error">{form.errors.validade}</p>
    {/if}
  </div>

  <div>
    <label>CVV:</label>
    <input name="cvv" maxlength="3" value={form?.data?.cvv || ''} required />
    {#if form?.errors?.cvv}
      <p class="error">{form.errors.cvv}</p>
    {/if}
  </div>

  <div>
    <label>Plano:</label>
    <select name="plano" required>
      <option value="" disabled selected>Escolha um plano</option>
      <option value="basico" selected={form?.data?.plano === 'basico'}>Plano Bit (básico)</option>
      <option value="intermediario" selected={form?.data?.plano === 'intermediario'}>Plano Byte (intermediário)</option>
      <option value="premium" selected={form?.data?.plano === 'premium'}>Plano Quantum (premium)</option>
    </select>
    {#if form?.errors?.plano}
      <p class="error">{form.errors.plano}</p>
    {/if}
  </div>

  <button type="submit">Pagar</button>
</form>
</div>
<style>
  .error {
    color: red;
    font-size: 0.9em;
  }
  .form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    max-width: 400px;
  }
</style>

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