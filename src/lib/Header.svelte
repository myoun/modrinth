<script lang="ts">
    import logo from '../assets/logo.svg'
    import { link } from 'svelte-spa-router'
</script>  

<main id="header">
    <a use:link href="/"><img src="{logo}" alt="logo"></a>

</main>

<style>
    #header {
        padding: 1rem;
        border: 1px solid whitesmoke;
        border-radius: 0.5rem;
        width: 100%;
        height: 10%;
        background-color: #282c34;
    }

    #header img {
        width: 16rem;
        
    }
</style>