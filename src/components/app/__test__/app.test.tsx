import React from 'react';
import { render, cleanup } from '@testing-library/react';

import App from '../app.component';

afterEach(cleanup);

describe('Testing App Component', () => {

    test('Simple Rendering, No Props', () => {
        render(<App/>);
    });

});