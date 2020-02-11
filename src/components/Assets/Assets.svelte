<script>
import AssetComponent from './AssetComponents.svelte';


let assetsDataset = [];

fetch("./database/UnityAssets.json") 
    .then(response => response.json())
    .then(json =>  {
        assetsDataset = json;
    });

</script>

<div id="assets">
    <div class="container">
        <h2>Unity Assets</h2>
        <br>

        {#each assetsDataset as dataset}
            <AssetComponent name={dataset.name} projectScreenshotSrc={dataset.projectScreenshot}
                                projectDescriptionList={dataset.projectDescriptionList} projectDescriptionWithLink={dataset.projectDescriptionWithLink} />
            <hr>
        {/each}

    </div>
</div>