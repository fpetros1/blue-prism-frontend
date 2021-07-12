import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';

import Schedule from '../schedule.component';
import ISchedule from '../../../types/schedule.type';
import store from '../../../redux/store';

afterEach(cleanup);

describe('Testing Schedule Component', () => { 

    test('Simple Rendering, null Schedule', () => {
        render(<Provider store={store}>
            <Schedule schedule={ null }/>
        </Provider>);
    });

    test('Simple Rendering, Mock Schedule', () => {

        const mockSchedule: ISchedule = {
            id: null,
            dayOfMonth: null,
            dayOfWeek: null,
            description: null,
            endDate: null,
            endPoint: null,
            intervalType: null,
            isRetired: null,
            name: null,
            startDate: null,
            startPoint: null,
            tasksCount: null,
            timePeriod: null
        };

        render(<Provider store={store}>
            <Schedule schedule={ mockSchedule }/>
        </Provider>);
    });

    test('Render Schedule Properties', () => {

        const mockSchedule: ISchedule = {
            id: 999,
            dayOfMonth: 25,
            dayOfWeek: 3,
            description: 'description',
            endDate: '1999-01-01T10:76:87Z',
            endPoint: '1999-01-01T10:76:87Z',
            intervalType: 'Minute',
            isRetired: false,
            name: 'Schedule',
            startDate: '1999-01-01T10:76:87Z',
            startPoint: '1999-01-01T10:76:87Z',
            tasksCount: 8,
            timePeriod: 14
        };

        const { getAllByTestId } = render(<Provider store={store}>
            <Schedule schedule={ mockSchedule }/>
        </Provider>);

        const allElementsGridTitle = getAllByTestId('elem-grid-title');
        const allElementsGridValue = getAllByTestId('elem-grid-value');
        
        expect(allElementsGridTitle[0]).toHaveTextContent('Description');
        expect(allElementsGridValue[0]).toHaveTextContent('description');

        expect(allElementsGridTitle[1]).toHaveTextContent('Task Count');
        expect(allElementsGridValue[1]).toHaveTextContent('8');

        expect(allElementsGridTitle[2]).toHaveTextContent('Time Period');
        expect(allElementsGridValue[2]).toHaveTextContent('14');

        expect(allElementsGridTitle[3]).toHaveTextContent('Interval Type');
        expect(allElementsGridValue[3]).toHaveTextContent('Minute');

        expect(allElementsGridTitle[4]).toHaveTextContent('Start Date');
        expect(allElementsGridValue[4]).toHaveTextContent('1999-01-01');

        expect(allElementsGridTitle[5]).toHaveTextContent('End Date');
        expect(allElementsGridValue[5]).toHaveTextContent('1999-01-01');
    });

});
