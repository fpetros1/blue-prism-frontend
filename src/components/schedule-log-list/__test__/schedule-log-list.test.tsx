import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';

import ScheduleLogList from '../schedule-log-list.component';
import store from '../../../redux/store';

afterEach(cleanup);

describe('Testing Schedule Log List Component', () => {

    test('Simple Rendering, No Props', () => {
        render(<Provider store={store}>
                <ScheduleLogList/>
            </Provider>);
    });  

});