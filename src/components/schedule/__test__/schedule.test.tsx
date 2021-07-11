import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import Schedule from '../schedule.component';

afterEach(cleanup);

describe('Testing Schedule Component', () => {
    test('Simple Rendering, No props', () => {
        render(<Schedule/>);
    });
});
