
export interface MultiScreenshotType {
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
    projectScreenshot : string[]
}

export interface SimpleInfoLinkType {
    url : string,
    content : string,
}

export interface SimpleInfoStructure {
    list : SimpleInfoLayoutType[]
}

export interface HeaderDataType {
    link : string,
    name : string
};

export const HeaderDataSet : HeaderDataType[] = [
    {
        link : "/experience",
        name : "Experience"
    }, 
    {
        link : "/hackathon",
        name : "Hackathon"
    },
    {
        link : "/projects",
        name : "Personal Project"
    },
    {
        link : "/assets",
        name : "Unity Asset"
    }
];