<script>
    let { data } = $props();
</script>
<h1>Usuários:</h1>

<form>
    <input name='pais' type='text' placeholder='Filtrar por país' class="form-control mb-3" />
    <button>FIltrar</button>
</form>


{#each data.users.users as user}
    <li><a href="/03/dummy/users/{user.id}">{user.firstName} - {user.address.country}</a></li>
{/each}
<br/>
<button class="btn btn-secondary mt-4" onclick={history.back()}>
    Voltar
</button>