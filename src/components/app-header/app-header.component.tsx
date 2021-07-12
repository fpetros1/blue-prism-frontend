import React from 'react';

import AppHeaderProps from './app-header.props';
import IAppState from '../../types/app-state.type';

export default class AppHeader extends React.Component<AppHeaderProps, IAppState> {
    
    static defaultProps: AppHeaderProps = {
        title: 'No Title'
    };

    constructor(props: AppHeaderProps) {
        super(props);
    }

    render() {
        return <h1 data-testid="title-header">
            { this.props.title }
        </h1>
    }

}
