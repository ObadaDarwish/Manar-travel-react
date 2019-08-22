import Enzyme from 'enzyme';
import React from 'react';
import Contactus from './contactus';
import * as contactUSAPI from '../../../axios/landing';

jest.mock('../../../axios/landing');
describe('Contact us component test', () => {
    it('should send post request and receive confirmation ', () => {
        const wrapper = Enzyme.shallow(<Contactus/>);
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