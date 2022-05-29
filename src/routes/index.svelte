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
    import PopularMovies from "../components/PopularMovies.svelte";
    import Footer from "../components/Footer.svelte";
    export /**
* @type {any}
*/
     let movies;
</script>

<svelte:head>
    <title>Popular Movies - (TMDB) API</title>
</svelte:head>

<PopularMovies {movies}/>
<Footer />