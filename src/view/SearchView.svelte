<script lang="ts">
    import SearchResult from '../lib/SearchResult.svelte';
    import type { Project } from '../share';
    import { querystring } from 'svelte-spa-router';
    import SearchBar from '../lib/SearchBar.svelte';
    $: query = new URLSearchParams($querystring)

    $: result = []

    $: console.log(result)
    
    $: fetch(`https://api.modrinth.com/v2/search?query=${query.get("name")}`)
        .then((res) => {
            return res.json()
        }).then((res) => {
            result = res.hits as Array<Project>;
            console.log(res)
        })
    
    console.log(result)
    

</script>

<main>
    <div id="searchbar">
        <SearchBar></SearchBar>
    </div>
    <h1 id="search-result-string">
        Found {result.length} Result for "{query.get("name")}"
    </h1>

    <ul>
        {#each result as project}
            <li>
                <SearchResult project={project}></SearchResult>
            </li>
        {/each}
    </ul>
</main>

<style>
    #search-result-string {
        color: whitesmoke;
        padding: 1rem;
    }
    
    ul {
        list-style-type: none;
    }

    #searchbar {
        margin-top: 1rem;
    }

</style>