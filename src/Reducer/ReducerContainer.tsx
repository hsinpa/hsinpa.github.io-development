import {combineReducers} from 'redux';

import {ExperienceReducer, ExperienceStructure} from '../components/Experience/ExperienceReducer';

export interface RooterReducerType{
    experience_structure : ExperienceStructure
}

export const Reducer = combineReducers({
    experience_structure : ExperienceReducer
});