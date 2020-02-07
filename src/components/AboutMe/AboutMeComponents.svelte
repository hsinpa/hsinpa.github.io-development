    <script>
    
    export const companyname = "";
    export const companylogoUrl = "";

    
    export const projectInfoArray = [];

    export class ProjectInfo {
        constructor(projectName, projectScreenshot, projectURL, projectDescriptionList) {
            this.projectName = projectName;
            this.projectScreenshot = projectScreenshot;
            this.projectURL = projectURL;
            
            this.projectDescriptionList = projectDescriptionList;
        }
    }
    </script>
    
    
    <div class="company_banner">
        <div class="company_logo"><img alt="company_logo" src={companylogoUrl}> <h2>{companyname}</h2></div>
        <br>
       
        <div class="company_content">
            <div class="columns">
                <div class="column">
                    <h2><a href="https://www.expectstudio.com/project-03">Football VR</a></h2>
                    <ul>
                        <li>Simulate football collide vibration to your controller</li>
                    </ul>
                    <br>
                    <h2><a href="https://www.expectstudio.com/project-03">Institute of Labor : VR Employee tranining</a></h2>
                    <ul>
                        <li>Train factory worker to practice with Stamping, Conveyor and Grinder machine</li>
                    </ul>

                </div>
            </div>

                <div class="columns screenshots">
                    <img class="column" alt="football vr" src="./sprites/screenshots/football_vr.png">
                    <img class="column" alt="vr training" src="./sprites/screenshots/Institute of Labor_vr_training.png">
                </div>

        </div>
        
    </div>