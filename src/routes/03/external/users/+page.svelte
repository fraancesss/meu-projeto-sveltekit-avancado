<script>
  let { data } = $props();
</script>

<h3>Usuários</h3>
<ul>
  {#each data.users as user}
    <li><a href="/03/external/users/{user.id}">{user.name}</a></li>
  {/each}
</ul>