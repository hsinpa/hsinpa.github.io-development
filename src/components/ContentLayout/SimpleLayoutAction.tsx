import {SimpleInfoLayoutType} from '../../utility/DatasetType';
import * as React from "react";

import {SimpleInfoLayoutBox} from './SimpleInfoLayoutBox';

export function GenerateSimpleLayout(infoList : SimpleInfoLayoutType[]) {
    let boxs = [];

    for (let i = 0; i < infoList.length; i++) {
        console.log(infoList[i]);
        boxs.push(<SimpleInfoLayoutBox content={infoList[i]}/>);
    }

    return boxs;
}