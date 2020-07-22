import {ActionFlag} from "../../utility/EventFlag";
import {ProjectType} from '../../utility/TypeFlag'

import {ExperienceType} from '../../utility/DatasetType'

export interface ExperienceStructure {
    list : ExperienceType[],
};

const initialState : ExperienceStructure = {
    list : []
};

export function ExperienceReducer(state = initialState, action : any ) : ExperienceStructure {

    switch (action.type) {
        case ActionFlag.FETCH_PROEJCT:
          return {
            ...state, list :action.payload
          };
    }

    return state;
}