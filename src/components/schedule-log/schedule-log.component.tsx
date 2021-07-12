import React from 'react';

import IAppState from '../../types/app-state.type';
import IScheduleLogProps from './schedule-log.props';
import CardGridElement from '../card-grid-element/card-grid-element.component';

export default class ScheduleLog extends React.Component<IScheduleLogProps, IAppState> {

    constructor(props: IScheduleLogProps) {
        super(props);
    }

    render() {
        if (!this.props.scheduleLog) {
            return null;
        }
        
        return <div className="card">
            <div className="card-title">
                <label htmlFor="Schedule Number">
                    <b>Log Number: </b>
                    { this.props.scheduleLog.id }
                </label>
            </div>
            <div className="card-content-sm">
                <CardGridElement title="Server Name" value={ this.props.scheduleLog.serverName }/>
                <CardGridElement title="Start Time" value={ 
                    this.props.scheduleLog.startTime ? 
                    (this.props.scheduleLog.startTime.substring(11))
                    :
                    null
                }/>
                <CardGridElement title="End Time" value={ 
                    this.props.scheduleLog.endTime ? 
                    (this.props.scheduleLog.endTime.substring(11))
                    :
                    null
                }/>
                <CardGridElement title="Status" value={ this.props.scheduleLog.status }/>
            </div>
        </div>
    }

}
