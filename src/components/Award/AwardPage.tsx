import * as React from "react";
import {RooterReducerType} from "../../Reducer/ReducerContainer";
import {Dispatch} from "redux";
import {connect, ConnectedProps } from 'react-redux';
import {DispatchFetchPost} from "../../utility/Utility";
import {ActionFlag, PortfolioPath } from "../../utility/EventFlag";
import { GenerateSimpleLayout} from "../ContentLayout/SimpleLayoutAction";

const mapDispatch = (dispatch : Dispatch) => {
    return {
        fetchData : () => (DispatchFetchPost(dispatch, ActionFlag.FETCH_AWARD, PortfolioPath.AwardPath)),
    }
}

const mapState = (state: RooterReducerType) => ({
    award: state.award_structure.list
});

const connector = connect(
    mapState,
    mapDispatch
);

type PropsFromRedux = ConnectedProps<typeof connector>  
  
class AwardPage extends React.Component<PropsFromRedux> {

    constructor(props: PropsFromRedux) {
        super(props);
        this.props.fetchData();
    }

    componentWillMount() {

    }
    
    render() {
        return <div id="unity_assets" className="container simple_info_layout">
            <h2>Wrainbo : As a team</h2>
            {GenerateSimpleLayout(this.props.award)}
        </div>;
    }
}

export default connector(AwardPage)