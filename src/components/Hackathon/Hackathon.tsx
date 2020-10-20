import * as React from "react";
import {RooterReducerType} from "../../Reducer/ReducerContainer";
import {Dispatch} from "redux";
import {connect, ConnectedProps } from 'react-redux';
import {DispatchFetchPost} from "../../utility/Utility";
import {ActionFlag, PortfolioPath } from "../../utility/EventFlag";

import { SimpleInfoLayoutBox} from "../ContentLayout/SimpleInfoLayoutBox";
import { GenerateSimpleLayout} from "../ContentLayout/SimpleLayoutAction";

const mapDispatch = (dispatch : Dispatch) => {
    return {
        fetchData : () => (DispatchFetchPost(dispatch, ActionFlag.FETCH_HACKATHON, PortfolioPath.HackathonPath)),
    }
}

const mapState = (state: RooterReducerType) => ({
    dataset: state.hackathon_structure.list
});

const connector = connect(
    mapState,
    mapDispatch
);

type PropsFromRedux = ConnectedProps<typeof connector>  
  
class Hackathon extends React.Component<PropsFromRedux> {

    constructor(props: PropsFromRedux) {
        super(props);
        this.props.fetchData();
    }
    
    render() {
        return <div id="hackathon" className="container simple_info_layout">
            <br></br>
            <h1>Flow of history - in Chronogical order</h1>
            {GenerateSimpleLayout(this.props.dataset)}
        </div>;
    }
}

export default connector(Hackathon)