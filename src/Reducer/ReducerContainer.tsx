import {combineReducers} from 'redux';

import {ExperienceReducer, ExperienceStructure} from '../components/Experience/ExperienceReducer';
import {UnityAssetReducer} from '../components/UnityAssets/UntiyAssetReducer';
import {HackathonReducer} from '../components/Hackathon/HackathonReducer';
import {ProjectStructureType, ProjectReducer } from '../components/Project/ProjectReducer';

import {SimpleInfoStructure} from '../utility/DatasetType';

export interface RooterReducerType{
    experience_structure : ExperienceStructure,
    asset_structure : SimpleInfoStructure,
    hackathon_structure :SimpleInfoStructure,
    pproject_structure : ProjectStructureType
}

export const Reducer = combineReducers({
    experience_structure : ExperienceReducer,
    asset_structure : UnityAssetReducer,
    hackathon_structure : HackathonReducer,
    pproject_structure : ProjectReducer
});