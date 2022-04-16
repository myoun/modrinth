<script lang="ts">
    import type { SimpleProject } from "../share";
    import { link, push } from 'svelte-spa-router';
    export let project: SimpleProject;
</script>

<main>
    <a use:link href={`/project/${project.slug}`} class="result-anchor">
        <div class="border">
            <img src={project.icon_url} alt={project.slug+" icon"}>
            <h5>{project.title}</h5>
            <p>{project.description}</p>
            <p>By {project.author}</p>
        </div>
    </a>
</main>

<style>
    .result-anchor {
        text-decoration: none;
        color: aliceblue;
        font-size: 2rem;
    } 
    .border {
        margin: 1rem;
        border: 1px solid whitesmoke;
        padding: 1rem;
        border-radius: 0.5rem;
    }
    .border p {
        font-size: 1rem;
    } 
    .border img {
        float: right;
        width: 100px;
        height: 100px;
    }
</style>