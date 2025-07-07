<script>
    let { data } = $props();
</script>


<ul>
    {#each data.usuarios as usuario}
        <li><strong>{usuario.name}:</strong> {usuario.email}</li>
    {/each}
</ul>

<body>
    <style>
        body {
            background-image: url('https://images6.alphacoders.com/132/thumb-1920-1320541.png');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            height: 90vh;
        }
        
    </style>
</body>


