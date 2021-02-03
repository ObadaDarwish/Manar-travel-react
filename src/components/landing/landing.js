import React,{createRef} from 'react';
import {Carousel} from 'react-bootstrap';
import {Route} from "react-router-dom";
import ManarProgram from "../manar-program/manar-program";
import {EnLanguage} from '../../language';
import Contactus from './contactus/contactus';
import SimpleMap from '../google-map/google-map';
import * as landingAPIS from '../../axios/landing'
import LoadingIndicator from '../loading-indicator/loading-indicator'
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";
import {LANDING} from '../../store/actions';
import madinah from '../../assets/imgs/madinah.jpg';
import makkah from '../../assets/imgs/makkah2.jpg';
import makkahTop from '../../assets/imgs/makkahtop.jpg';
import umrah from '../../assets/imgs/umrah.jpg'
import hajj from '../../assets/imgs/hajj.jpg'
import ramdan from '../../assets/imgs/ramdan.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckSquare, faHandHoldingUsd, faHandshake, faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import mission from '../../assets/imgs/mission.png'
import aboutUs from '../../assets/imgs/aboutus.jpg'
const mapStateToProps = state => {
    return {landingState: state.landingReducer};
};

const mapDispatchToProps = dispatch => {
    return {
        updateLanding: landing => dispatch(landing)
    };
}
const aboutUsRef = createRef();
class Landing extends React.Component {

    constructor(props) {
        super(props);
        console.log('constructor ' + props);
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log('drived state from props', props)
    //     return state
    // }

    // state = {
    //     manarPrograms: [],
    //     loadingManarPrograms: true
    // };

    componentDidMount() {
        landingAPIS.GetManarPrograms().then(res => {
            // this.setState({
            //     manarPrograms: res.data,
            //     loadingManarPrograms: false
            // })
            this.props.updateLanding({
                type: LANDING, payload: {
                    manarPrograms: res.data,
                    loadingManarPrograms: false
                }
            })
        }).catch(err => {
            console.log(err);
            // this.setState({
            //     loadingManarPrograms: false
            // })
            this.props.updateLanding({
                type: LANDING, payload: {
                    manarPrograms: [],
                    loadingManarPrograms: false
                }
            })
        })

    }

    render() {
        return (
            <div>
                <Carousel id="myCarousel">
                    <Carousel.Item>
                        <div className="item_overlay"/>
                        <img
                            className="d-block w-100"
                            src={madinah}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <div className="moto">
                                <h1>Manar <span>TRAVEL</span></h1>
                                <p>Choose destination, forgot about planning</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="item_overlay"/>
                        <img
                            className="d-block w-100"
                            src={makkah}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <div className="moto">
                                <h1>Custom programs</h1>
                                <p>Choose programs that fit your needs</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="item_overlay"/>
                        <img
                            className="d-block w-100"
                            src={makkahTop}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <div className="moto">
                                <h1>Low prices</h1>
                                <p>We offer the best deals</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className="landingContainer">
                    <div className="Title">
                        <p>{EnLanguage.landing_html.Custom_Program}</p>
                    </div>
                    <div className="mainRoutes" id="mainRoute">

                        <div className="Umrah">
                            <img src={umrah} alt=""/>
                            <div className="routeTitle"><p>{EnLanguage.landing_html.Umrah}</p></div>
                        </div>
                        <div className="hajj">
                            <img src={hajj} alt=""/>
                            <div className="routeTitle"><p>{EnLanguage.landing_html.Hajj}</p></div>
                        </div>
                        <div className="Ramadan">
                            <img src={ramdan} alt=""/>
                            <div className="routeTitle"><p>{EnLanguage.landing_html.Ramadan}</p></div>
                        </div>

                    </div>
                    <div className="visitTitle">
                        <p>{EnLanguage.landing_html.Manar_Programs}</p>
                    </div>
                    <NavLink to='/manar-programs' className="see_more"><p>{EnLanguage.landing_html.See_More}</p>
                    </NavLink>
                    <div className="visit">
                        {this.props.landingState.loadingManarPrograms ? <LoadingIndicator/> :
                            <React.Fragment>
                                {this.props.landingState.manarPrograms.map((program, index) => {
                                    return (
                                        <div className="item" key={index}>
                                            {/*program.picture*/}
                                            <img src={require(`../../assets/imgs/${program.picture}`)} alt=""/>
                                            <div className="itemTitle"><p>{program.name}</p></div>
                                            <div className="itemDescription"><p>{program.programType}</p>
                                                <p><i className="fa fa-suitcase"/> Departure: {program.departureDate}
                                                </p>
                                            </div>
                                            <NavLink to={'/manar-program/' + program.programType + '/' + program.id}
                                                     className="knowMore"><p>Know More</p>
                                            </NavLink>
                                        </div>
                                    )
                                })}</React.Fragment>}
                    </div>

                </div>
                <div className="valueTitle">
                    <p>{EnLanguage.landing_html.Values}</p>
                </div>
                <div className="values">
                    <div className="first_row">
                        <div className="integrity">{EnLanguage.landing_html.We_believe}</div>
                        <p>
                            <FontAwesomeIcon icon={faHandshake}  style={{color:'white'}} size={'3x'}/>
                        </p>
                    </div>
                    <div className="second_row">
                        <div className="left">
                            <div className="reliability">{EnLanguage.landing_html.QUANTITY}
                            </div>
                            <p>
                                <FontAwesomeIcon icon={faThumbsUp}  style={{color:'white'}} size={'3x'}/>
                            </p>
                        </div>
                        <div className="right">
                            <p>
                                <FontAwesomeIcon icon={faHandHoldingUsd}  style={{color:'white'}} size={'3x'}/>
                            </p>
                            <div className="reliability">{EnLanguage.landing_html.prices_RESEONABLE}</div>

                        </div>
                    </div>
                    <div className="third_row">
                        <p>
                            <FontAwesomeIcon icon={faCheckSquare}  style={{color:'white'}} size={'3x'}/>
                        </p>
                        <div className="reliability">{EnLanguage.landing_html.RELY_on_us}</div>
                    </div>
                </div>
                <div className="mission">
                    <div className="mission_overlay">
                    </div>
                    <img src={mission} alt=""/>
                    <div className="mission_description">
                        <h1>{EnLanguage.landing_html.Our_Mission}</h1>
                        <p>{EnLanguage.landing_html.mission}</p>
                    </div>
                </div>
                <div className="aboutus" id="scrollAbout" ref={aboutUsRef}>
                    <div className="aboutus_description">
                        <h1>{EnLanguage.landing_html.About_Us}</h1>
                        <p>{EnLanguage.landing_html.about_us_description}</p>
                    </div>
                    <div className="aboutus_overlay">
                    </div>
                    <img src={aboutUs} alt=""/>
                </div>
                <Contactus/>
                <SimpleMap/>
                <Route path={'/manar-programs'} component={ManarProgram}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)


