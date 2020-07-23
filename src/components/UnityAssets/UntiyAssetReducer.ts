import {ActionFlag} from "../../utility/EventFlag";
import {ProjectType} from '../../utility/TypeFlag';

import {SimpleInfoStructure} from '../../utility/DatasetType';

const initialState : SimpleInfoStructure = {
    list : []
};

export function UnityAssetReducer(state = initialState, action : any ) : SimpleInfoStructure {

    switch (action.type) {
        case ActionFlag.FETCH_UNITYASSET:
            console.log(action.payload);
          return {
            ...state, list :action.payload
          };
    }

    return state;
}