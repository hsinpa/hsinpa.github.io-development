import * as React from "react";
import {RooterReducerType} from "../../Reducer/ReducerContainer";
import {Dispatch} from "redux";
import {connect, ConnectedProps } from 'react-redux';

const mapDispatch = (dispatch : Dispatch) => {
    return {
    }
}

const mapState = (state: RooterReducerType) => ({
});

const connector = connect(
    mapState,
    mapDispatch
);

type PropsFromRedux = ConnectedProps<typeof connector>  
  
class UnityAssets extends React.Component<PropsFromRedux> {

    constructor(props: PropsFromRedux) {
        super(props);
    }

    componentWillMount() {

    }
    
    render() {
        return <div>
            Unity Assets
        </div>;
    }
}

export default connector(UnityAssets)