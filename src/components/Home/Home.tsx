import * as React from "react";
import {RooterReducerType} from "../../Reducer/ReducerContainer";
import {ProjectType} from '../../utility/TypeFlag'
import {ActionFlag,TestJSONPath} from "../../utility/EventFlag";
import {Dispatch} from "redux";

import Header from '../Layout/Header';
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
  
class Home extends React.Component<PropsFromRedux> {

    constructor(props: PropsFromRedux) {
        super(props);
    }

    componentWillMount() {

    }
    
    render() {
        return <div>
                <Header/>

        <div>
            Home
        </div>

        <Switch>
            
        </Switch>
        </div>;
    }
}

export default connector(Home)