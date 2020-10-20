import * as React from "react";
import {RooterReducerType} from "../../Reducer/ReducerContainer";
import {GetAllExperience} from './ExperienceAction'
import {Dispatch} from "redux";
import {connect, ConnectedProps } from 'react-redux';
import { JobLayoutBox } from '../ContentLayout/JobLayoutBox';
import {MultiScreenshotType} from '../../utility/DatasetType'

const mapDispatch = (dispatch : Dispatch) => {
    return {
        fetchData : () => (GetAllExperience(dispatch)),
    }
}

const mapState = (state: RooterReducerType) => ({
    projects: state.experience_structure.list
});

const connector = connect(
    mapState,
    mapDispatch
);

type PropsFromRedux = ConnectedProps<typeof connector>  
  
class Experience extends React.Component<PropsFromRedux> {

    constructor(props: PropsFromRedux) {
        super(props);
        this.props.fetchData();
    }

    CreateJobLayoutBox(project : MultiScreenshotType[]) {
        let boxs = [];
        let projectNum = project.length;

        console.log(project);
        
        for (let i = 0; i < projectNum; i++) {
            boxs.push(<JobLayoutBox content={project[i]} />);
        }
    
        return boxs;
    }

    componentWillMount() {
        // if (this.props.projects.length == 0) {
        //     this.props.fetchData();
        // }
    }
    
    render() {
        return <div>

            <div className="container">
                <div id="experience_main"  className="column is-1">
                    {this.CreateJobLayoutBox(this.props.projects)}
                </div>
            </div>

        </div>;
    }
}

export default connector(Experience)