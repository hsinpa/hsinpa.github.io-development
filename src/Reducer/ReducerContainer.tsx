import {combineReducers} from 'redux';

import {ExperienceReducer, ExperienceStructure} from '../components/Experience/ExperienceReducer';
import {UnityAssetReducer} from '../components/UnityAssets/UntiyAssetReducer';
import {SimpleInfoStructure} from '../utility/DatasetType';

export interface RooterReducerType{
    experience_structure : ExperienceStructure,
    asset_structure : SimpleInfoStructure
}

export const Reducer = combineReducers({
    experience_structure : ExperienceReducer,
    asset_structure : UnityAssetReducer
});