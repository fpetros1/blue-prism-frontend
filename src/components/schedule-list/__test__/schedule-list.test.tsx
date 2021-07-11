import React from 'react';
import { Provider } from 'react-redux';

import { render, cleanup } from '@testing-library/react';
import ScheduleList from '../schedule-list.component';
import store from '../../../redux/store';

afterEach(cleanup);

describe('Testing ScheduleList Component', () => {
    test('Simple Rendering, No props', () => {
        render(<Provider store={store}>
            <ScheduleList/>
        </Provider>);
    });
});
