<script>
  let isNavbarVisible = true;

  function toggleNavbar() {
    isNavbarVisible = !isNavbarVisible;
  }
</script>

<style>
  .navbar {
    background-color: rgba(255, 0, 0, 0.425);
    backdrop-filter: blur(6px);
    border-radius: 12px;
    padding: 1rem;
    max-width: 700px;
    margin: 1rem auto;
    transition: all 0.3s ease;
  }

  .hidden {
    display: none;
  }

  .brand {
    font-weight: bold;
    font-size: 1.2rem;
    margin-right: auto;
    color: white;
    text-decoration: none;
  }

  .nav-link {
    margin-left: 1rem;
    text-decoration: none;
    color: black;
  }

  .nav-link:hover {
    text-decoration: underline;
    color: #333;
  }

  .minimize-btn {
    display: block;
    margin: 1rem auto 0;
    background: transparent;
    border: 2px solid crimson;
    color: crimson;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
  }

  .minimize-btn:hover {
    background-color: crimson;
    color: white;
  }
  .letra5 {
    font-size: 20px;
      color: #14af00;
      font-weight: 1000;
  }
  
</style>



<button class="minimize-btn" on:click={toggleNavbar}>
  {isNavbarVisible ? '🐦' : '🐦‍🔥'}
</button>


{#if isNavbarVisible}
<div class="letra5">
  <nav class="navbar">
    
    <a class="brand" href="/">INICIO</a>
    <a class="nav-link" href="/06/ifms">botao3</a>
    <a class="nav-link" href="/06/cadastro-usuario">cadastro</a>
    <a class="nav-link" href="/06/profile"></a>
    <a class="nav-link" href="/06/post"></a>
    <a class="nav-link" href="/06/cadastro-produto">CAD-produto</a>
    <a class="nav-link" href="/06/ifms/a"></a>
    <a class="nav-link" href="/06/ifms/b"></a>
    <a class="nav-link" href="/06/ifms/c"></a>
    <a class="nav-link" href="/06/inscricao">inscricao</a>
    <a class="nav-link" href="/06/inscricao/basico"></a>
    <a class="nav-link" href="/06/inscricao/intermediario"></a>
    <a class="nav-link" href="/06/inscricao/premium"></a>

  </nav>
  </div>
{/if}
