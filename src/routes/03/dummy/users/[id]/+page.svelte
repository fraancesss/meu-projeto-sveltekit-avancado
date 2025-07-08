<script>
    let { data } = $props();
</script>
<h2>Usuário: <b>{data.user.firstName} {data.user.lastName}</b></h2>

<img src={data.user.image} alt="Foto do usuário" class="img-fluid mb-3" style="width: 200px;">

<br/>

Idade: <b>{data.user.age}</b> anos.
<br/>

Número de telefone: <b>{data.user.phone}</b>

<br/>

Endereço: <b>{data.user.address.address}, {data.user.address.city} - {data.user.address.state}</b>

<br/>

<h3>Posts:</h3>
{#each data.posts.posts as post}
    <a href="/03/dummy/posts/{post.id}">{post.title}</a>
    <br/>
{/each}

<br/>
<button class="btn btn-secondary mt-4" onclick={history.back()}>
    Voltar
</button>