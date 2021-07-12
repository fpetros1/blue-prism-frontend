import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ScheduleLog from '../schedule-log.component';
import IScheduleLog from '../../../types/schedule-log.type';

afterEach(cleanup);

describe('Testing Schedule Log Component', () => { 

    test('Simple Rendering, null Schedule Log', () => {
        render(<ScheduleLog scheduleLog={ null }/>);
    });

    test('Simple Rendering, Mock Schedule Log', () => {

        const mockScheduleLog: IScheduleLog = {
            endTime: null,
            id: null,
            scheduleId: null,
            serverName: null,
            startTime: null,
            status: null
        };

        render(<ScheduleLog scheduleLog={ mockScheduleLog }/>);
    });
});
