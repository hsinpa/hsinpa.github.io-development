import * as React from "react";
import {SimpleInfoLayoutType} from '../../utility/DatasetType'
import {OnEnlargmeImageEvent} from '../../utility/Utility'

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

    GenerateYoutubeIframe(youtube_id : string) : JSX.Element {
        if (!youtube_id) return <div></div>;

        let youtubeSrc = "https://www.youtube.com/embed/"+youtube_id;

        return <iframe className="row_screenshot"
                    width="560" 
                    height="315" 
                    src={youtubeSrc} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    frameBorder="0">
                </iframe>;
    }

    GenerateScreenShot(info : SimpleInfoLayoutType) : JSX.Element {
        let infoLen = info.projectScreenshot.length;
        if (infoLen <= 0)
            return <div></div>;

        let imgBox : JSX.Element[] = [];

        for (let i = 0; i < infoLen; i++) {
            imgBox.push(
                <img alt={info.name} src={info.projectScreenshot[i]} onClick={OnEnlargmeImageEvent} />
            )
        } 

        let imgClassname = (infoLen > 1) ? "row row_screenshot" : "col-md-3";

        return <div className={imgClassname}>
            {imgBox}
        </div>;   
    }

    OnImageClick(p_event : React.MouseEvent<HTMLImageElement>) {
        let enlargeClassNmae = "enlargeImg";
        p_event.currentTarget.className = (p_event.currentTarget.className == "") ? enlargeClassNmae : "";
    }

    render() {
        const content = this.props.content;
        return <div className="asset_demo">
            <h3>{content.name}</h3>
            <div className="row asset_demo">
                {this.GenerateInfoBox(this.props.content)}
                {this.GenerateScreenShot(this.props.content)}
                {this.GenerateYoutubeIframe(this.props.content.youtube)}
                
            </div>
        </div>;
    }
}