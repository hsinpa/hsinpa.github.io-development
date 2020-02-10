    <script>
    
    export let companyname = "";
    export let companylogoUrl = "";
    export let jobTitle = "";
    export let screenshot_enlargable = "";

    export let projectInfoArray = [];

    const OnScreenshotClickEvent = function() {
        if (this.getAttribute("data-enlargable") == "false") return;

        if (this.getAttribute("data-type") == "shrink") {
            this.style.cssText = "position: absolute; left : 0; right :0; margin-left:auto; margin-right : auto; max-width:60rem; z-index:1;";
            this.setAttribute("data-type", "enlarge");
        } else {
            this.style.cssText = "position: relative; max-width: 35rem; z-index:0;";
            this.setAttribute("data-type", "shrink");
        }
    }
    
    </script>
    
    
    <div class="company_banner">
        <div class="company_logo"><img alt={companyname} src={companylogoUrl}> <h2>{companyname}</h2> <h3>{jobTitle}</h3></div>
        <br>
       
        <div class="company_content">
            <div class="columns">
                <div class="column">
                    {#each projectInfoArray as projectInfo}
                        <h2><a href={projectInfo.projectURL}>{projectInfo.projectName}</a></h2>

                        <ul>
                        {#each projectInfo.projectDescriptionList as projectDesc}
                            <li>{projectDesc}</li>
                        {/each}
                        </ul>

                        <br>
                    {/each}
                </div>
            </div>


            <div class="columns screenshots">
                {#each projectInfoArray as projectInfo}
                    {#each projectInfo.projectScreenshot as screenshot}
                        <img class="column" alt={projectInfo.projectName} src={screenshot} data-enlargable={screenshot_enlargable}
                         on:click={OnScreenshotClickEvent} data-type="shrink">
                    {/each}
                {/each}
            </div>

        </div>
        
    </div>