<script>
  let { data } = $props();
</script>
 
<h3>Usuário</h3>
<p><strong>Nome:</strong> {data.user.name}</p>
<p><strong>Email:</strong> {data.user.email}</p>
<p><strong>Telefone:</strong> {data.user.phone}</p>
<p><strong>Website:</strong> {data.user.website}</p>
<p><strong>Empresa:</strong> {data.user.company.name}</p>
<p><strong>Endereço:</strong> {data.user.address.street}, {data.user.address.suite}, {data.user.address.city}, {data.user.address.zipcode}</p>
 
<h3>Postagens do usuário</h3>
<ul>
  {#each data.posts as post}
    <li><a href="/04/external/posts/{post.id}">{post.title}</a></li>
  {:else}
    <p>Esse usuário não postou nada ainda!</p>
  {/each}
</ul>
 
<p><a href="/04/external/users">Voltar aos usuários</a></p>