import * as React from "react";
import {RooterReducerType} from "../../Reducer/ReducerContainer";
import {Dispatch} from "redux";
import {connect, ConnectedProps } from 'react-redux';
import {DispatchFetchPost} from "../../utility/Utility";
import {ActionFlag, PortfolioPath } from "../../utility/EventFlag";
import { GenerateSimpleLayout} from "../ContentLayout/SimpleLayoutAction";

const mapDispatch = (dispatch : Dispatch) => {
    return {
        fetchUnityAIData : () => (DispatchFetchPost(dispatch, ActionFlag.FETCH_PP_UNITYARVR_SSET, PortfolioPath.UnityAIProject)),
        fetchWebAndroidData : () => (DispatchFetchPost(dispatch, ActionFlag.FETCH_PP_WEB_ANDROID_ASSET, PortfolioPath.WebAndroidProject))
    }
}

const mapState = (state: RooterReducerType) => ({
    unity_ai_set: state.pproject_structure.unity_ar_list,
    web_android_set: state.pproject_structure.other_list,
});

const connector = connect(
    mapState,
    mapDispatch
);

type PropsFromRedux = ConnectedProps<typeof connector>  
  
class PersonalProject extends React.Component<PropsFromRedux> {

    constructor(props: PropsFromRedux) {
        super(props);
        this.props.fetchUnityAIData();
        this.props.fetchWebAndroidData();
    }
    
    render() {
        return <div className="container simple_info_layout">
            <br></br>
            <h1>Made with proud</h1>

            <h2>Unity / Computer Vision / AR Project</h2>
            {GenerateSimpleLayout(this.props.unity_ai_set)}


            <h2>Web / Android Project</h2>
            {GenerateSimpleLayout(this.props.web_android_set)}
        </div>;
    }
}

export default connector(PersonalProject)