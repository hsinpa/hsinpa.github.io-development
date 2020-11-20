import * as React from "react";
import {MultiScreenshotType, ProjectInfoArrayType} from '../../utility/DatasetType'
import {OnEnlargmeImageEvent} from '../../utility/Utility'

export interface JobLayoutBoxProp { content: MultiScreenshotType; }

export class JobLayoutBox extends React.Component<JobLayoutBoxProp, {}> {


    CreateJobDescriptionList(info : ProjectInfoArrayType[]) :JSX.Element[] {
        let boxs : JSX.Element[] = [];
        let projectNum = info.length;

        
        for (let i = 0; i < projectNum; i++) {
            boxs.push(<h2><a href={info[i].projectURL}>{info[i].projectName}</a></h2>);

            let descriptionNum = info[i].projectDescriptionList.length;

            let bulletPoint : JSX.Element[] = [];

            for (let k = 0; k < descriptionNum; k++) {
                bulletPoint.push(<li>{info[i].projectDescriptionList[k]}</li>)
            }

            boxs.push(<ul>{bulletPoint}</ul>);

            let screenShotNum = info[i].projectScreenshot.length;

            let screenShotList : JSX.Element[] = [];

            for (let k = 0; k < screenShotNum; k++) {

                if (info[i].projectScreenshot[k])
                    screenShotList.push(<img alt={info[i].projectName} src={info[i].projectScreenshot[k]} onClick={OnEnlargmeImageEvent} />);
            }

            boxs.push(<div className="screenshots">{screenShotList}</div>);

        }    
        return boxs;
    }

    render() {
        const content = this.props.content;
        return <div className="job_layout_box">

            <div className="company_logo">
            <img alt={content.companyname} src={content.companyUrl}/> <h2>{content.companyname}</h2> <h3>{content.jobTitle}</h3>
            </div>

            <div className="company_content">
                {this.CreateJobDescriptionList(content.projectInfoArray)}
            </div>

        </div>;
    }
}