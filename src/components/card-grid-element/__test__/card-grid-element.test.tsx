import React from 'react';
import { render, cleanup } from '@testing-library/react';

import CardGridElement from '../card-grid-element.component';

afterEach(cleanup);

describe('Testing Card Grid Element Component', () => {

    test('Simple Rendering, No Props', () => {
        render(<CardGridElement title={null} value={null}/>);
    });

    test('Rendering Title', () => {
        const { getByTestId } = render(<CardGridElement title="Test Title" value={ null }/>);
        
        expect(getByTestId('elem-grid-title')).toHaveTextContent('Test Title');
    }); 

    test('Rendering Value', () => {
        const { getByTestId } = render(<CardGridElement title={ null } value="Test Value" />);
        
        expect(getByTestId('elem-grid-value')).toHaveTextContent('Test Value');
    }); 

    test('Rendering Both Title and Value', () => {
        const { getByTestId } = render(<CardGridElement title="Test Title" value="Test Value" />);
        
        expect(getByTestId('elem-grid-title')).toHaveTextContent('Test Title');
        expect(getByTestId('elem-grid-value')).toHaveTextContent('Test Value');
    }); 

});