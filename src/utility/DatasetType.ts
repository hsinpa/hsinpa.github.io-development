
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

export interface SimpleInfoLayoutType {
    name : string,
    projectDescriptionList : string[],
    projectDescriptionWithLink : SimpleInfoLinkType[],
    projectScreenshot : string
}

export interface SimpleInfoLinkType {
    url : string,
    content : string,
}

export interface SimpleInfoStructure {
    list : SimpleInfoLayoutType[],
}