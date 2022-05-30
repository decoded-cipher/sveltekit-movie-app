import { writable } from "svelte/store";

export const movies = writable([]);
export const page = writable(1);

var popularMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=88af887dc207ed05b0088d5e266d3a24&language=en-US&page=${page}`);
    const data = await res.json();
    
    if (res.ok) {
        movies.set(data.results);
    }
    
    return {
        status: res.status,
        message: new Error('Could not fetch Posts!')
    }
}

popularMovies();