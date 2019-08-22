import React from 'react';
import Enzyme from 'enzyme';
import Landing from './landing';
import * as landingAPIS from "../../axios/landing";

const puppeteer = require('puppeteer');
jest.setTimeout(30000)
jest.mock('../../axios/landing');
describe('landing Component test', () => {

    it('checks if data was loaded from API', () => {
        landingAPIS.GetManarPrograms().then(res => {
            expect(res.length).toEqual(3);
        });
    });
    // it('Simulates user sending a contact us request', async () => {
    //     const browser = await puppeteer.launch({
    //         headless: false,
    //         slowMo: 80,
    //         args: ['--window-size=1920,1080']
    //     })
    //     const page = await browser.newPage();
    //     await page.goto('http://192.168.1.110:3000/',{waitUntil: 'load', timeout: 0})
    //
    // })
})

