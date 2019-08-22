import React from 'react';
import Enzyme from 'enzyme';
import App from './App';

describe('App Component test', () => {
    it('checks if class exists', () => {
        const wrapper = Enzyme.shallow(<App/>)
        expect(wrapper.find(".App").exists()).toEqual(true);
    });
})

