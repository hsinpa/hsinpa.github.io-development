import * as React from "react";
import {RooterReducerType} from "../../Reducer/ReducerContainer";
import {ProjectType} from '../../utility/TypeFlag'
import {ActionFlag,TestJSONPath} from "../../utility/EventFlag";
import {Dispatch} from "redux";

import Header from './Header';

import Experience from '../Experience/Experience';
import Project from '../Project/PerosnalProject';
import Hackathon from '../Hackathon/Hackathon';
import UnityAssets from '../UnityAssets/UnityAssets';
import AwardPage from '../Award/AwardPage';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

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

// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>  
  
class Router extends React.Component<PropsFromRedux> {

    constructor(props: PropsFromRedux) {
        super(props);
    }

    componentWillMount() {

    }
    
    render() {
        return <div>
            <Header/>
            <Switch>
                <Route path="/" component={Experience} exact />
                <Route path="/experience" component={Experience} />
                <Route path="/projects" component={Project} />
                <Route path="/hackathon" component={Hackathon} />
                <Route path="/assets" component={UnityAssets} />
                {/* <Route path="/award" component={AwardPage} /> */}
            </Switch>
        </div>
    }
}

export default connector(Router)