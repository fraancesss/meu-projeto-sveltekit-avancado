<script>
    let { data } = $props();
  </script>
  
  <form>
    <input name="email" type="email" placeholder="E-mail de usuário" />
    <input name="senha" type="password" placeholder="Senha" />
    <button>Entrar</button>
  </form>
  
  {#if data.status == 400}
    <p>E-mail e senha são obrigatórios!</p>
  {:else if data.status == 401}
    <p>Usuário ou senha inválidos!</p>
  {:else if data.status == 200}
    <p>Login efetuado com sucesso!</p>
    <p>Bem-vindo, {data.email}!</p>
  {/if}