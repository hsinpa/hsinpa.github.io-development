import {ActionFlag} from "../../utility/EventFlag";

import {SimpleInfoStructure} from '../../utility/DatasetType';

const initialState : SimpleInfoStructure = {
    list : []
};

export function AwardReducer(state = initialState, action : any ) : SimpleInfoStructure {

    switch (action.type) {
        case ActionFlag.FETCH_AWARD:
            console.log(action.payload);
          return {
            ...state, list :action.payload
          };
    }

    return state;
}