<script context="module">
    // @ts-ignore
    export async function load({ fetch }) {
        const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=88af887dc207ed05b0088d5e266d3a24&language=en-US&page=1");
        const movies = await res.json();

        if (res.ok) {
            return {
                props: {
                    movies: movies.results
                }
            }
        }

        return {
            status: res.status,
            message: new Error('Could not fetch Posts!')
        }
    }
</script>

<script>
    export
    /**
     * @type {any}
     */
    let movies;
</script>


<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
    {#each movies as movie}
        <div class="bg-white dark:bg-slate-800 rounded-xl px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
            <img src="https://image.tmdb.org/t/p/w500/{movie.poster_path}" alt="{movie.title}">

            <h2 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">{movie.title}</h2>
            <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">{movie.overview}</p>
        </div>
    {/each}
</div>

