import {ActionFlag} from "../../utility/EventFlag";
import {ProjectType} from '../../utility/TypeFlag'

import {MultiScreenshotType} from '../../utility/DatasetType'

export interface ExperienceStructure {
    list : MultiScreenshotType[],
};

const initialState : ExperienceStructure = {
    list : []
};

export function ExperienceReducer(state = initialState, action : any ) : ExperienceStructure {

    switch (action.type) {
        case ActionFlag.FETCH_EXPERIENCE:
          return {
            ...state, list :action.payload
          };
    }

    return state;
}