import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import Schedule from '../schedule.component';
import ISchedule from '../../../types/schedule.type';

afterEach(cleanup);

describe('Testing Schedule Component', () => { 
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

        render(<Schedule schedule={mockSchedule}/>);
    });
});
