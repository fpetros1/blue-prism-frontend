import React from 'react';
import { render, cleanup } from '@testing-library/react';

import AppHeader from '../app-header.component';

afterEach(cleanup);

describe('Testing AppHeader Component', () => {

    test('Simple rendering, No Props', () => {
        const { getByTestId } = render(<AppHeader></AppHeader>)
        expect(getByTestId('title-header')).toHaveTextContent('No Title');
    });

    test('Rendering title text', () => {
        const { getByTestId } = render(<AppHeader title="Placeholder Title"></AppHeader>)
        expect(getByTestId('title-header')).toHaveTextContent('Placeholder Title');
    });

});