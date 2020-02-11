<script>

export let name = "";
export let projectScreenshotSrc = "";

export let projectDescriptionList = [];    
export let projectDescriptionWithLink = [];    

</script>

    
<div class="asset_demo">
    <h2>{name}</h2>
    <br>
    <div class="columns">
        <div class="column is-two-thirds">
            <ul>
                {#each projectDescriptionList as projectInfo}
                    <li>{projectInfo}</li>
                {/each}

                {#each projectDescriptionWithLink as { url, content }, i}
                    <li><a href={url} target="_blank" rel="noopener noreferrer">{content}</a></li>
                {/each}

            </ul>
        </div>

        <div class="column">
            {#if projectScreenshotSrc != ""}
                <img alt={name} src={projectScreenshotSrc}>
            {/if}
        </div>
    </div>
</div>