<script lang="ts">
    import SearchBar from '../lib/SearchBar.svelte';
    import logo from '../assets/logo.svg'
    import type { SimpleProject } from '../share';
    import SearchResult from '../lib/SearchResult.svelte';
    import { push } from 'svelte-spa-router';

    
    if (!location.pathname.includes("#")) {
        location.href = location.origin+"/#"+location.pathname
    }

    let result: Array<SimpleProject> = []

    fetch(`https://api.modrinth.com/v2/search`)
        .then((res) => {
            return res.json()
        }).then((res) => {
            result = res.hits as Array<SimpleProject>;
        })
</script>  

<main>
    <div id="searchbar"><SearchBar></SearchBar></div>
    <ul>
        {#each result as project}
            <li>
                <SearchResult project={project}></SearchResult>
            </li>
        {/each}
    </ul>
</main>
  
<style>
    :root {
        background-color: #282c34;
    }
    #search-result-string {
        color: whitesmoke;
        padding: 1rem;
    }
    
    ul {
        list-style-type: none;
    }

    #searchbar {
        margin-top: 1rem;
        padding-left: 2rem;
    }
</style>