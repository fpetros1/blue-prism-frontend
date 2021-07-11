import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ScheduleLogList from '../schedule-log-list.component';

afterEach(cleanup);

describe('Testing Schedule Log List Component', () => {

    test('Simple Rendering, No Props', () => {
        render(<ScheduleLogList/>);
    });  

});