<script lang="ts">
    import FaSearch from 'svelte-icons/fa/FaSearch.svelte';
    import { push, pop, replace, location } from 'svelte-spa-router';
    let name = ""
</script>

<main id="search">
    <input type="text" id="field" bind:value={name} name="hidden">
    <button id="submit" on:click={() => {
        if (name.length != 0) {
            push("/search?name="+name)
        }
        }}><FaSearch></FaSearch></button>
</main>

<style>
    #search {
        padding: 2rem;
    }

    #field {
        width: 85%;
        height: 3rem;
        background-color: rgb(75, 77, 80);
        border: 1px solid grey;
        outline: 0;
        font-size: 1.5rem;
        padding-left: 0.5rem;
        color: whitesmoke;
        font-weight: 500;
    }

    #submit {
        color: whitesmoke;
        border: 1px solid grey;
        outline: 0;
        background-color: rgb(55, 56, 58);
        padding : 1rem;
        width: 12%;
        height: 3rem;
    }
</style>