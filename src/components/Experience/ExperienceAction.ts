import {Dispatch} from "redux";
import {ProjectType, PackageType} from '../../utility/TypeFlag'

import {ExperienceType, ProjectInfoArrayType} from '../../utility/DatasetType'

import {ActionFlag, PortfolioPath } from "../../utility/EventFlag";
import {PostFetch} from "../../utility/Utility";

export const GetAllExperience = (dispatch : Dispatch) => {
    try {
        PostFetch(PortfolioPath.ExperiencePath, (data : ExperienceType[]) => {
            console.log(data);
            // let packageSets : PackageType[] = [];
            // data.forEach(x => {
            //     packageSets.push(x);
            // });

            // console.log(packageSets);
            // dispatch({
            //     type : ActionFlag.GET_PACKAGE_BY_PID,
            //     payload : packageSets
            // })
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