import Enzyme from 'enzyme';
import React from 'react';
import Contactus from './contactus';
import { Provider } from "react-redux";
import * as contactUSAPI from '../../../axios/landing';
import configureMockStore from "redux-mock-store";

jest.mock('../../../axios/landing');

const mockStore = configureMockStore();
const store = mockStore({});
describe('Contact us component test', () => {
    it('should send post request and receive confirmation ', () => {
        const wrapper = Enzyme.shallow(<Provider store={store}>
            <Contactus/>
        </Provider>);
        wrapper.find('#first_name').value = 'mark';
        wrapper.find('#last_name').value = 'daniel';
        wrapper.find('#message').value = 'help me!!';
        wrapper.find('#email').value = 'daniel@mark.com';
        wrapper.find('#mobile').value = '0551588888';
        wrapper.instance().contactUS = jest.fn(() => {
            let body = {
                first_name: wrapper.find('#first_name').value,
                last_name: wrapper.find('#last_name').value,
            };
            contactUSAPI.ContactUsMessage(body).then(res => {
                expect(res).toEqual('Message has been sent successfully')
            });
        });
        wrapper.instance().contactUS();
        expect(wrapper.instance().contactUS).toHaveBeenCalledTimes(1);
    });
});