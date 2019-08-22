import './landing.css';
import React from 'react';
import {Carousel} from 'react-bootstrap';
import {EnLanguage} from '../../language';
import Contactus from './contactus/contactus';
import SimpleMap from '../google-map/google-map';
import * as landingAPIS from '../../axios/landing'
import LoadingIndicator from '../loading-indicator/loading-indicator'
import {NavLink} from 'react-router-dom';

export default class Landing extends React.Component {
    state = {
        manarPrograms: [],
        loadingManarPrograms: true
    };

    componentDidMount() {
        landingAPIS.GetManarPrograms().then(res => {
            this.setState({
                manarPrograms: res.data,
                loadingManarPrograms: false
            })
        }).catch(err => {
            console.log(err);
            this.setState({
                loadingManarPrograms: false
            })
        })
    }

    render() {
        return (
            <div>
                <Carousel id="myCarousel">
                    <Carousel.Item>
                        <div className="item_overlay"></div>
                        <img
                            className="d-block w-100"
                            src="/assets/imgs/madinah.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <div className="moto">
                                <h1>Manar <span>TRAVEL</span></h1>
                                <p>sadasd</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="item_overlay"></div>
                        <img
                            className="d-block w-100"
                            src="/assets/imgs/makkah2.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <div className="moto">
                                <h1>asdasd</h1>
                                <p>asdasda</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="item_overlay"></div>
                        <img
                            className="d-block w-100"
                            src="/assets/imgs/makkahtop.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <div className="moto">
                                <h1>asdasd</h1>
                                <p>asdasda</p>
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
                            <img src="/assets/imgs/umrah.jpg" alt=""/>
                            <div className="routeTitle"><p>{EnLanguage.landing_html.Umrah}</p></div>
                        </div>
                        <div className="hajj">
                            <img src="/assets/imgs/hajj.jpg" alt=""/>
                            <div className="routeTitle"><p>{EnLanguage.landing_html.Hajj}</p></div>
                        </div>
                        <div className="Ramadan">
                            <img src="/assets/imgs/ramdan.jpg" alt=""/>
                            <div className="routeTitle"><p>{EnLanguage.landing_html.Ramadan}</p></div>
                        </div>

                    </div>
                    <div className="visitTitle">
                        <p>{EnLanguage.landing_html.Manar_Programs}</p>
                    </div>
                    <NavLink to='/manar-programs' className="see_more"><p>{EnLanguage.landing_html.See_More}</p>
                    </NavLink>
                    <div className="visit">
                        {this.state.loadingManarPrograms ? <LoadingIndicator/> :
                            <React.Fragment>
                                {this.state.manarPrograms.map((program, index) => {
                                    return (
                                        <div className="item" key={index}>
                                            <img src={'/assets/imgs/' + program.picture} alt=""/>
                                            <div className="itemTitle"><p>{program.name}</p></div>
                                            <div className="itemDescription"><p>{program.programType}</p>
                                                <p><i className="fa fa-suitcase"></i> Departure: {program.departureDate}
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
                        <p><i className="fa fa-3x fa-handshake-o" aria-hidden="true"></i></p>
                    </div>
                    <div className="second_row">
                        <div className="left">
                            <div className="reliability">{EnLanguage.landing_html.QUANTITY}
                            </div>
                            <p><i className="fa fa-3x fa-thumbs-o-up" aria-hidden="true"></i></p>
                        </div>
                        <div className="right">
                            <p><i className="fa fa-3x fa-usd" aria-hidden="true"></i></p>
                            <div className="reliability">{EnLanguage.landing_html.prices_RESEONABLE}</div>

                        </div>
                    </div>
                    <div className="third_row">
                        <p><i className="fa fa-3x fa-check-square-o" aria-hidden="true"></i></p>
                        <div className="reliability">{EnLanguage.landing_html.RELY_on_us}</div>
                    </div>
                </div>
                <div className="mission">
                    <div className="mission_overlay">
                    </div>
                    <img src="/assets/imgs/mission.png" alt=""/>
                    <div className="mission_description">
                        <h1>{EnLanguage.landing_html.Our_Mission}</h1>
                        <p>{EnLanguage.landing_html.mission}</p>
                    </div>
                </div>
                <div className="aboutus" id="scrollAbout">
                    <div className="aboutus_description">
                        <h1>{EnLanguage.landing_html.About_Us}</h1>
                        <p>{EnLanguage.landing_html.about_us_description}</p>
                    </div>
                    <div className="aboutus_overlay">
                    </div>
                    <img src="/assets/imgs/aboutus.jpg" alt=""/>
                </div>
                <Contactus/>
                <SimpleMap/>
            </div>
        )
    }
}




