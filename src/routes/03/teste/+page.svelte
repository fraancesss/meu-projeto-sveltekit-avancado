<script>
    let { data } = $props();
  </script>
   
  <h1>{data.post.title}</h1>
  <sub>por {data.author.name}</sub>
  <div>{@html data.post.content}</div>