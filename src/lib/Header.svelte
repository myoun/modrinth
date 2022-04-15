<script lang="ts">
    import logo from '../assets/logo.svg'
    import { link } from 'svelte-spa-router'
</script>  

<main id="header">
    <a href="/"><img src="{logo}" alt="logo"></a>
</main>

<style>
    #header {
        padding: 1rem;
        border: 1px solid whitesmoke;
        border-radius: 0.5rem;
    }

    #header img {
        width: 16rem;
        
    }
</style>