import React from 'react';
import EnLanguage from "../../../language";
import * as contactUSAPI from '../../../axios/landing';
import { NotificationManager} from 'react-notifications';
export default class Contactus extends React.Component {

    state = {
        first_name: '',
        last_name: '',
        message: '',
        email: '',
        mobile: ''
    }
    contactUS = (event) => {
        event.preventDefault();

        let body = {...this.state};
        body['created_at'] = new Date();
        console.log(body);
        contactUSAPI.ContactUsMessage(body).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err);

            NotificationManager.error('Error','Opps, sorry something went wrong!')
        })
    }
    change = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div className="contact_us" id="scrollContact">
                <form
                    onSubmit={this.contactUS}>
                    <div className="contact_us">
                        <div className="contact_us_title"><p>{EnLanguage.landing_html.Contact_us}</p>
                        </div>
                        <div className="contact_us_form">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label
                                                htmlFor="first_name">{EnLanguage.landing_html.First_Name}</label>
                                            <input value={this.state.first_name} onChange={this.change} type="text"
                                                   placeholder="Ex: Mark"
                                                   className="form-control"
                                                   id="first_name"
                                                   name="first_name"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label
                                                htmlFor="last_name">{EnLanguage.landing_html.Last_Name}</label>
                                            <input value={this.state.last_name} onChange={this.change} type="text"
                                                   placeholder="Ex: Thomson"
                                                   className="form-control"
                                                   id="last_name"
                                                   name="last_name"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label
                                                htmlFor="message">{EnLanguage.landing_html.Message}</label>
                                            <textarea value={this.state.message} onChange={this.change}
                                                      className="form-control"
                                                      placeholder="Your message"
                                                      id="message"
                                                      name="message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="email">{EnLanguage.landing_html.Email}</label>
                                            <input value={this.state.email} onChange={this.change} type="email"
                                                   placeholder="Ex: example@hotmail.com"
                                                   className="form-control"
                                                   id="email"
                                                   name="email"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label
                                                htmlFor="mobile">{EnLanguage.landing_html.mobile}</label>
                                            <input value={this.state.mobile} onChange={this.change} type="number"
                                                   placeholder="Ex: 01XXXXXXXXX"
                                                   className="form-control"
                                                   id="mobile"
                                                   name="mobile"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <input type="submit" className="sumbitButton" value="Submit"/></div>
                                </div>
                                <div className=" col-lg-4">
                                    <div className=" details">
                                        <div className=" item">
                                            <h3>{EnLanguage.landing_html.Address}</h3>
                                            <p>Cross roads 7 & 82,Maadi, Cairo-Egypt</p>
                                        </div>
                                        <div className=" item">
                                            <h3>{EnLanguage.landing_html.Open_Time}</h3>
                                            <p>9am => 5pm</p>
                                        </div>
                                        <div className=" item">
                                            <h3>{EnLanguage.landing_html.Phone}</h3>
                                            <p>01001518668</p>
                                        </div>
                                        <div className=" item">
                                            <h3>{EnLanguage.landing_html.Email}</h3>
                                            <p>manar@travel.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}