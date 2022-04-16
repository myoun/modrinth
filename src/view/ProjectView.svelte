<script lang="ts">
    import { location, params } from 'svelte-spa-router'
    import type { Project } from "../share";
    import SvelteMarkdown from 'svelte-markdown';
    import FaCloudDownloadAlt from 'svelte-icons/fa/FaCloudDownloadAlt.svelte'
    import IoMdPeople from 'svelte-icons/io/IoMdPeople.svelte'

    let project : Array<Project> = []

    let slug = $location.split("/")[2]

    // let slug = $params.project

    fetch(`https://api.modrinth.com/v2/project/${slug}`)
        .then((res) => {
            return res.json()
        }).then((res) => {
            console.log(res)
            project[0] = res as Project
        })
</script>

<main>
    {#each project as pj}
        <div id="left-bar">
            <img src={pj.icon_url} alt={pj.slug+" icon"}>
            <h1>{pj.title}</h1>
            <h3>{pj.description}</h3>
            <p>{pj.license.name}</p>
            <div>
                <div style="border-radius: 25%; width:3rem;">
                    <FaCloudDownloadAlt></FaCloudDownloadAlt>
                </div>
                <span>{pj.downloads}</span>
                <div style="border-radius: 25%; width:3rem;">
                    <IoMdPeople></IoMdPeople>
                </div>
                <span>{pj.followers}</span>
            </div>
            <a href={"https://modrinth.com/mod/"+pj.slug}>View in Modrinth</a>

        </div>
        <div id="body">
            <SvelteMarkdown source={pj.body}></SvelteMarkdown>
        </div>
    {:else}
        <p>Loading...</p>
    {/each}
</main>

<style>
    main {
        color: aliceblue;
    }
    #left-bar > img {
        width: 90%;        
        margin-left: 5%;
        margin-right: 5%;
        border-radius: 1rem;
    }

    #left-bar {
        float: left;
        /* background-color: gray; */
        width: 20%;
        margin-right: 10rem;
        position: fixed;
        height: 100%;
        border: 1px solid aliceblue;
        border-radius: 0.5rem;
        padding: 1rem   ;
    }

    #body {
        margin-left: 22.5%;
    }
</style>