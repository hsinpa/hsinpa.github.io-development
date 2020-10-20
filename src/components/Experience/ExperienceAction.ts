import {Dispatch} from "redux";
import {ProjectType, PackageType} from '../../utility/TypeFlag'

import {MultiScreenshotType, ProjectInfoArrayType} from '../../utility/DatasetType'

import {ActionFlag, PortfolioPath } from "../../utility/EventFlag";
import {PostFetch} from "../../utility/Utility";

export const GetAllExperience = (dispatch : Dispatch, ) => {
    try {
        PostFetch(PortfolioPath.ExperiencePath, (data : MultiScreenshotType[]) => {
            console.log(data);

            dispatch({type: ActionFlag.FETCH_EXPERIENCE, payload : data});
        });
    } catch (error) {
      console.error(error);
    }
}

interface GetPackageActionInterface {
    type: string,
    payload: PackageType[]
}
export type GetPackageActionType = GetPackageActionInterface;