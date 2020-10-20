import * as React from "react";
import {SimpleInfoLayoutType} from '../../utility/DatasetType'

export interface SimpleInfoLayoutProp { content: SimpleInfoLayoutType; }

export class SimpleInfoLayoutBox extends React.Component<SimpleInfoLayoutProp, {}> {
    
    GenerateInfoBox(info : SimpleInfoLayoutType) : JSX.Element[] {
        let boxs : JSX.Element[] = [];
        let descListNum = info.projectDescriptionList.length;
        let urlListNum = info.projectDescriptionWithLink.length;

        let descList : JSX.Element[] = [];
        for (let i = 0; i < descListNum; i++) {
            descList.push(<li>{info.projectDescriptionList[i]}</li>)
        }

        for (let i = 0; i < urlListNum; i++) {
            descList.push(
            <li><a href={info.projectDescriptionWithLink[i].url} target="_blank" rel="noopener noreferrer">
                {info.projectDescriptionWithLink[i].content}
            </a></li>
            )
        }

        boxs.push(<div className="col-md-9"><ul>{descList}</ul></div>);

        return boxs;
    }

    GenerateScreenShot(info : SimpleInfoLayoutType) : JSX.Element {
        let infoLen = info.projectScreenshot.length;
        if (infoLen <= 0)
            return <div></div>;


        let imgBox : JSX.Element[] = [];

        for (let i = 0; i < infoLen; i++) {
            imgBox.push(
                <img alt={info.name} src={info.projectScreenshot[i]} />
            )
        }

        let imgClassname = (infoLen > 1) ? "row row_screenshot" : "col-md-3";

        return <div className={imgClassname}>
            {imgBox}
        </div>;   
    }

    render() {
        const content = this.props.content;
        return <div className="asset_demo">
            <h2>{content.name}</h2>

            <div className="row asset_demo">
                {this.GenerateInfoBox(this.props.content)}
                {this.GenerateScreenShot(this.props.content)}
            </div>
        </div>;
    }
}