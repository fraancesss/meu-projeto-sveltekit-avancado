<script>
    let { data } = $props();
</script>

<b>UserID:</b> {data.post.userId}
<hr />
<b>ID do post:</b> {data.post.id}
<hr />
<b>Título do post:</b> {data.post.title}
<hr />
<b>Conteúdo do post:</b> {data.post.body}
<hr />
<b>Comentários do post:</b>
{#each data.comments as comment}
        <b>Nome:</b> {comment.name}
        <br />
        <b>Email:</b> {comment.email}
        <br />
        <b>Conteúdo:</b>{comment.body}
        <hr />
{/each}