import React from 'react';

import ICardGridElementProps from './card-grid-element.props';
import IAppState from '../../types/app-state.type';

export default class CardGridElement extends React.Component<ICardGridElementProps, IAppState> {

    constructor(props: ICardGridElementProps) {
        super(props);
    }

    render() {
        return <label htmlFor={this.props.title}>
            <b data-testid="elem-grid-title">{this.props.title}: </b> 
            <br/> 
            <span data-testid="elem-grid-value">
                { this.props.value }
            </span>
        </label>
    }

}
