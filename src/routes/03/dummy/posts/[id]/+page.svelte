<script>
    let { data } = $props();
</script>

<h1>Post: <b>{data.post.title}</b></h1>
id da postagem: <b>{data.post.id}</b>
<br/>
Tags: 
{#each data.post.tags as tag}
    <span class="badge rounded-pill text-bg-secondary">{tag}</span>
{/each}
<br/>
<span class="badge rounded-pill text-bg-primary"><b>{data.post.views}</b> views</span>
<br/>
<span class="badge rounded-pill text-bg-success">👍<b>{data.post.reactions.likes}</b></span>
<span class="badge rounded-pill text-bg-danger">👎<b>{data.post.reactions.dislikes}</b></span>

<hr>
{data.post.body}
<br/>
<button class="btn btn-secondary mt-4" onclick={history.back()}>
    Voltar
</button>