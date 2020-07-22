import * as React from "react";
import {RooterReducerType} from "../../Reducer/ReducerContainer";
import {GetAllExperience} from './ExperienceAction'
import {Dispatch} from "redux";
import {connect, ConnectedProps } from 'react-redux';

const mapDispatch = (dispatch : Dispatch) => {
    return {
        fetchData : () => (GetAllExperience(dispatch)),
    }
}

const mapState = (state: RooterReducerType) => ({
});

const connector = connect(
    mapState,
    mapDispatch
);

type PropsFromRedux = ConnectedProps<typeof connector>  
  
class Experience extends React.Component<PropsFromRedux> {

    constructor(props: PropsFromRedux) {
        super(props);

        props.fetchData();
    }

    componentWillMount() {

    }
    
    render() {
        return <div>
            Experience
        </div>;
    }
}

export default connector(Experience)