<script lang="ts">
    import type { Project } from "../share";
    export let project: Project;
</script>

<main>
    <a href={`https://modrinth.com/mod/${project.slug}`} class="result-anchor">
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