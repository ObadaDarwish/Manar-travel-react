import React from 'react';
import * as ProgramsAPIs from '../../axios/programs';

jest.mock('../../axios/programs');


describe('Contact us component test', () => {
    it('should get all Manar programs ', () => {
        ProgramsAPIs.getAllManarPrograms().then(res => {
            expect(res.length).toBeGreaterThan(1)
        })
    });
});