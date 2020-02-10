<script>
import AboutMeComponent from './AboutMeComponents.svelte';


let pastExperienceDataset = [];

fetch("./database/PastExperience.json") 
    .then(response => response.json())
    .then(json =>  {
        pastExperienceDataset = json;
    });

</script>

<div class="container portfolio-aboutme">
    {#each pastExperienceDataset as dataset}
        <AboutMeComponent companyname={dataset.companyname} jobTitle={dataset.jobTitle} screenshot_enlargable={dataset.screenshot_enlargable}
                            companylogoUrl={dataset.companyUrl} projectInfoArray={dataset.projectInfoArray} />
        <hr>
    {/each}
</div>