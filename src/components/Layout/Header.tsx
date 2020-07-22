
import * as React from "react";
import {RooterReducerType} from "../../Reducer/ReducerContainer";
import {Dispatch} from "redux";
import {connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';

const connector = connect(
    null,
    null
);

type PropsFromRedux = ConnectedProps<typeof connector>

class Header extends React.Component<PropsFromRedux> {
    render() {
        return <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Hsinpa's Portfolio</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">

                    <Link className="nav-link" to="/experience">Experience <span className="sr-only">(current)</span> </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/hackathon">Hackathon</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/projects">Personal Project</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/assets">Unity Asset</Link>
                </li>
                </ul>
            </div>
            </nav>


        </div>;
    }
}

export default Header;