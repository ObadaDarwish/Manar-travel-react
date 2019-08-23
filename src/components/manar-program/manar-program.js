import React from 'react';
import * as programAPIS from '../../axios/programs';
import LoadingIndicator from '../loading-indicator/loading-indicator'
import {EnLanguage} from '../../language';
import {Route, Redirect} from 'react-router-dom';
import Summary from "./summary/summary";
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {manarProgramState: state.manarProgramReducer};
};

function mapDispatchToProps(dispatch) {
    return {
        updateManarProgram: program => dispatch(program)
    };
}

class ManarProgram extends React.Component {

    // state = {
    //     program: '',
    //     isProgramLoading: true,
    // }

    componentDidMount() {
        if (this.props.match.params.code === 'umrah') {
            programAPIS.getUmrahProgram(this.props.match.params.id).then(res => {
                // this.setState({
                //     program: res.data[0],
                //     isProgramLoading: false
                // })
                this.props.updateManarProgram({
                    type: 'manarProgramState', payload: {
                        program: res.data[0],
                        isProgramLoading: false
                    }
                })
            })
        } else {
            programAPIS.getHajjProgram(this.props.match.params.id).then(res => {
                // this.setState({
                //     program: res.data[0],
                //     isProgramLoading: false
                // })
                this.props.updateManarProgram({
                    type: 'manarProgramState', payload: {
                        program: res.data[0],
                        isProgramLoading: false
                    }
                })
            })
        }

    }

    requestProgram = () => {

    }

    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.manarProgramState.isProgramLoading ? <div>
                    <div className="space lg"></div>
                    <LoadingIndicator/></div> : <div className="profileContainer">
                    <div className="profileHeader">
                        <div className="banner">
                            <div className="img_container">
                                <img src={'/assets/imgs/' + this.props.manarProgramState.program.picture} alt=""/>
                            </div>
                            <div className="details_container">
                                <h1>{this.props.manarProgramState.program.name}</h1>
                                <p>{this.props.manarProgramState.program.programType} {EnLanguage.program_profile_html.program}</p>
                                <div className="horizontal_line programHeader"></div>
                                <div className="date">
                                    <div className="tripDuration">
                                        <p><i className="fa fa-hourglass-half" aria-hidden="true"></i>
                                            {EnLanguage.program_profile_html.Trip_duration}
                                            : {this.props.manarProgramState.program.tripDuration}
                                            {EnLanguage.program_profile_html.Days}</p>
                                    </div>
                                    <div className="TripDate">
                                        {/*<div><p><i*/}
                                        {/*className="fa fa-suitcase"></i> {EnLanguage.program_profile_html.Departure}}:*/}
                                        {/*{profileService.departureDate | date:'fullDate'}}</p></div>*/}
                                        {/*<div><p><i*/}
                                        {/*className="fa fa-suitcase"></i> {EnLanguage.program_profile_html.Arrival}}: {*/}
                                        {/*profileService.arrivalDate | date:'fullDate'}}</p></div>*/}
                                    </div>
                                </div>
                                {/*<div className="route">*/}
                                {/*<div className="route_block">*/}
                                {/*<div className="route_circle">*/}
                                {/*<div className="circle"></div>*/}
                                {/*<div className="route_name">*/}
                                {/*{route}}*/}
                                {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="route_arrow">*/}
                                {/*<i className="fa fa-2x fa-caret-right" aria-hidden="true"></i>*/}
                                {/*</div>*/}

                                {/*</div>*/}

                                {/*</div>*/}
                            </div>
                        </div>
                        <div className="program_routes">
                            <div className="route_tab">
                                <p>{EnLanguage.program_profile_html.Summary}</p>
                            </div>
                            <div className="route_tab">
                                <p>{EnLanguage.program_profile_html.Gallery}</p>
                            </div>
                        </div>
                    </div>
                    {/*router outlet*/}

                    <Route path={this.props.match.url + '/summary'} component={Summary}/>
                    <Redirect from={this.props.match.url + '/'} to={{
                        pathname: this.props.match.url + '/summary',
                        state: this.props.manarProgramState
                    }}/>

                    <div className="requestProgram">
                        <div className="requestButton" onClick={this.requestProgram}>
                            {EnLanguage.program_profile_html.Request_Program}
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManarProgram)