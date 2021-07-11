import React from 'react';

import IAppState from '../../types/app-state.type';
import IScheduleLogListProps from './schedule-log-list.props';

export default class ScheduleLogList extends React.Component<IScheduleLogListProps, IAppState> {

    constructor(props: IScheduleLogListProps) {
        super(props);
    }

    render() {
        return <h1></h1>;
    }

}