import React from 'react';
import {EnLanguage} from "../../../language";
import * as contactUSAPI from '../../../axios/landing';
import {NotificationManager} from 'react-notifications';

export default class Contactus extends React.Component {

    state = {
        first_name: {
            value: '',
            validation: {
                required: true
            },
            errorMessage: '',
            is_valid: false,
            is_touched: false
        },
        last_name: {
            value: '',
            validation: {
                required: true
            },
            errorMessage: '',
            is_valid: false,
            is_touched: false
        },
        message: {
            value: '',
            validation: {
                required: true,
                min_length: 5
            },
            errorMessage: '',
            is_valid: false,
            is_touched: false
        },
        email: {
            value: '',
            validation: {
                required: true,
                pattern: '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
            },
            errorMessage: '',
            is_valid: false,
            is_touched: false
        },
        mobile: {
            value: '',
            validation: {
                required: true
            },
            errorMessage: '',
            is_valid: false,
            is_touched: false
        },
        is_form_valid: false
    }
    contactUS = (event) => {
        event.preventDefault();
        let body;
        let formValue = {...this.state};
        if (formValue.is_form_valid) {
            for (let input in formValue) {
                if (input !== 'is_form_valid')
                    body = {...body, [input]: formValue[input].value}
                body['created_at'] = new Date();
            }
            contactUSAPI.ContactUsMessage(body).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err);

                NotificationManager.error('Error', 'Opps, sorry something went wrong!')
            })
        }
    }

    checkFormValidation = (name, value, validation) => {
        let is_valid = true;
        let errorMessage = '';
        if (validation.required) {
            is_valid = value.trim() !== '' && is_valid;
            errorMessage = 'This field is required!';
        }
        if (validation.min_length) {
            is_valid = value.length >= validation.min_length && is_valid
            errorMessage = 'Min length of ' + validation.min_length;
        }
        if (validation.pattern) {
            is_valid = value.match(validation.pattern)
            errorMessage = 'Wrong format';
        }

        return {is_valid: is_valid, errorMessage: errorMessage};
    };
    change = (e) => {
        let updatedValue = {
            ...this.state[e.target.name]
        };
        let updatedState = {
            ...this.state
        };
        updatedValue.value = e.target.value;
        updatedValue.is_touched = true;
        updatedValue.is_valid = this.checkFormValidation(e.target.name, e.target.value, updatedValue.validation).is_valid;
        updatedValue.errorMessage = this.checkFormValidation(e.target.name, e.target.value, updatedValue.validation).errorMessage;
        let is_form_valid = true;
        for (let formInput in updatedState) {
            if (formInput !== 'is_form_valid') {
                console.log(updatedState[formInput])
                is_form_valid = updatedState[formInput].is_valid && is_form_valid
            }
        }
        console.log(is_form_valid);
        this.setState({[e.target.name]: updatedValue, is_form_valid: is_form_valid});
    };

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
                                                htmlFor="first_name">{EnLanguage.landing_html.First_Name}
                                                {!this.state.first_name.is_valid && this.state.first_name.is_touched ?
                                                    <span className="errorMessageClass">{this.state.first_name.errorMessage}</span> : null}</label>
                                            <input value={this.state.first_name.value} onChange={this.change}
                                                   type="text"
                                                   placeholder="Ex: Mark"
                                                   className="form-control"
                                                   id="first_name"
                                                   name="first_name"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label
                                                htmlFor="last_name">{EnLanguage.landing_html.Last_Name}
                                                {!this.state.last_name.is_valid && this.state.last_name.is_touched ?
                                                    <span className="errorMessageClass">{this.state.last_name.errorMessage}</span> : null}</label>
                                            <input value={this.state.last_name.value} onChange={this.change} type="text"
                                                   placeholder="Ex: Thomson"
                                                   className="form-control"
                                                   id="last_name"
                                                   name="last_name"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label
                                                htmlFor="message">{EnLanguage.landing_html.Message}
                                                {!this.state.message.is_valid && this.state.message.is_touched ?
                                                    <span className="errorMessageClass">{this.state.message.errorMessage}</span> : null}</label>
                                            <textarea value={this.state.message.value} onChange={this.change}
                                                      className="form-control"
                                                      placeholder="Your message"
                                                      id="message"
                                                      name="message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="email">{EnLanguage.landing_html.Email}
                                                {!this.state.email.is_valid && this.state.email.is_touched ?
                                                    <span className="errorMessageClass">{this.state.email.errorMessage}</span> : null}</label>
                                            <input value={this.state.email.value} onChange={this.change} type="email"
                                                   placeholder="Ex: example@hotmail.com"
                                                   className="form-control"
                                                   id="email"
                                                   name="email"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label
                                                htmlFor="mobile">{EnLanguage.landing_html.mobile}
                                                {!this.state.mobile.is_valid && this.state.mobile.is_touched ?
                                                    <span className="errorMessageClass">{this.state.mobile.errorMessage}</span> : null}</label>
                                            <input value={this.state.mobile.value} onChange={this.change} type="text"
                                                   placeholder="Ex: 01XXXXXXXXX"
                                                   className="form-control"
                                                   id="mobile"
                                                   name="mobile"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button type="submit" id="submitButton" className={'sumbitButton'} disabled={!this.state.is_form_valid}>Submit</button>
                                    </div>
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