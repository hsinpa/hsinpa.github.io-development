import {ActionFlag} from "../../utility/EventFlag";
import {ProjectType} from '../../utility/TypeFlag';

import {SimpleInfoLayoutType} from '../../utility/DatasetType';

export interface ProjectStructureType {
    unity_ar_list : SimpleInfoLayoutType[],
    other_list : SimpleInfoLayoutType[]
}

const initialState : ProjectStructureType = {
    unity_ar_list : [],
    other_list : []
};

export function ProjectReducer(state = initialState, action : any ) : ProjectStructureType {

    switch (action.type) {
        case ActionFlag.FETCH_PP_UNITYARVR_SSET:
          return {
            ...state, unity_ar_list : action.payload
          };

        case ActionFlag.FETCH_PP_WEB_ANDROID_ASSET:
            return {
                ...state, other_list : action.payload
        };
    }

    return state;
}