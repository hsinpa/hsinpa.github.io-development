import {ActionFlag} from "../../utility/EventFlag";
import {ProjectType} from '../../utility/TypeFlag';

import {SimpleInfoStructure} from '../../utility/DatasetType';

const initialState : SimpleInfoStructure = {
    list : []
};

export function HackathonReducer(state = initialState, action : any ) : SimpleInfoStructure {
    switch (action.type) {
        case ActionFlag.FETCH_HACKATHON:
            console.log(action.payload);
          return {
            ...state, list :action.payload
          };
    }
    return state;
}