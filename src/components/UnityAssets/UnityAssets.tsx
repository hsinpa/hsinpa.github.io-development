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
        fetchData : () => (DispatchFetchPost(dispatch, ActionFlag.FETCH_UNITYASSET, PortfolioPath.UnityAssetPath)),
    }
}

const mapState = (state: RooterReducerType) => ({
    assets: state.asset_structure.list
});

const connector = connect(
    mapState,
    mapDispatch
);

type PropsFromRedux = ConnectedProps<typeof connector>  
  
class UnityAssets extends React.Component<PropsFromRedux> {

    constructor(props: PropsFromRedux) {
        super(props);
        this.props.fetchData();
    }

    componentWillMount() {

    }
    
    render() {
        return <div id="unity_assets" className="container">
            {GenerateSimpleLayout(this.props.assets)}
        </div>;
    }
}

export default connector(UnityAssets)