import React from 'react';
import EnLanguage from '../../language';
import getAllManarPrograms from '../../axios/programs'
import LoadingIndicator from "../loading-indicator/loading-indicator";
import {NavLink} from 'react-router-dom'
class Programs extends React.Component {
    state = {
        programs: [],
        isLoadingPrograms: true
    }

    componentDidMount() {
        getAllManarPrograms.then(res => {
            this.setState({
                programs: res.data,
                isLoadingPrograms: false
            })
        }).catch(err => {

        })
    }

    render() {
        return (
            this.state.isLoadingPrograms ? <div><div className="space lg"></div><LoadingIndicator/></div> : <div className="programListContainer">
                <div className="Title right manar_program">
                    <p>{EnLanguage.Manar_Programs_html.Manar_Programs}</p>
                </div>
                {/*(click)="openProfile(program.programType,program.id)"*/}
                <div className="programList">
                    {this.state.programs.map((program, index) => {
                        return (
                            <NavLink to={'/manar-program/' + program.programType + '/' + program.id} className="item" key={index}>
                                <img src={'http://localhost:8000/storage/' + program.picture} alt=""/>
                                <div className=" itemTitle"><p>{program.name}</p></div>
                                <div className=" itemDescription">
                                    <p>{program.programType.toUpperCase()} {EnLanguage.Manar_Programs_html.Program} </p>
                                </div>
                                <div className=" itemDate">
                                    <p><i
                                        className=" fa fa-suitcase"></i>{EnLanguage.Manar_Programs_html.Departure + program.departureDate}
                                    </p>
                                </div>
                            </NavLink>
                        )
                    })}
                </div>
            </div>
        )
    }
};

export default Programs