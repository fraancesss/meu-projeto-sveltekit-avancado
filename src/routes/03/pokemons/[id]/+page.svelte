<script>
    let { data } = $props();
</script>

<div class="container my-5">
    <div class="card shadow-lg">
        <div class="card-body">
            <h1 class="card-title text-center text-uppercase text-secondary display-4">
                <b>{data.pokemon.name}</b>
            </h1>

            <div class="row mt-4">
                <div class="col-md-6">
                    <p><strong>Altura:</strong> {data.pokemon.height / 10} m</p>
                    <p><strong>Peso:</strong> {data.pokemon.weight / 10} kg</p>

                    <p class="fw-bold text-primary mt-3">Habilidades:</p>
                    <ul class="list-group list-group-flush mb-3">
                        {#each data.pokemon.abilities as ability}
                            <li class="list-group-item text-capitalize">{ability.ability.name}</li>
                        {/each}
                    </ul>

                    <p class="fw-bold text-success">Tipos:</p>
                    <div class="mb-3">
                        {#each data.pokemon.types as type}
                            <span class="badge bg-success-subtle text-success me-1 text-capitalize">
                                {type.type.name}
                            </span>
                        {/each}
                    </div>

                    <p class="fw-bold text-info">Estatísticas:</p>
                    <ul class="list-group list-group-flush">
                        {#each data.pokemon.stats as stat}
                            <li class="list-group-item text-capitalize">
                                {stat.stat.name}: <strong>{stat.base_stat}</strong>
                            </li>
                        {/each}
                    </ul>
                </div>

                <div class="col-md-6 text-center">
                    <p class="text-muted">Imagem normal:</p>
                    <img src={data.pokemon.sprites.front_default} alt={data.pokemon.name} class="img-fluid mb-4" style="width: 200px;" />

                    <p class="text-muted">Imagem shiny:</p>
                    <img src={data.pokemon.sprites.front_shiny} alt={data.pokemon.name} class="img-fluid" style="width: 200px;" />
                </div>
            </div>
        </div>
    </div>
</div>

<button class="btn btn-secondary mt-4" onclick={history.back()}>
    Voltar
</button>