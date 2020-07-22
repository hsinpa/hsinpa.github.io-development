
export interface ExperienceType {
    companyname : string,
    companyUrl : string,
    jobTitle : string,
    screenshot_enlargable : boolean,
    projectInfoArray : ProjectInfoArrayType[]
};

export interface ProjectInfoArrayType {
    projectName : string,
    projectScreenshot : string[]
    projectURL : string,
    projectDescriptionList : string[]
};

