import React from 'react';

import IScheduleProps from './schedule.props';
import IAppState from '../../types/app-state.type';

export default class Schedule extends React.Component<IScheduleProps, IAppState> {

    constructor(props: IScheduleProps) {
        super(props);
    }

    render() {
        return <div className="card">
            <div className="card-title">
                <label htmlFor="Schedule Name"><b>{ this.props.schedule.name }</b></label>
            </div>
            <div className="card-content">
                <label htmlFor="Description">
                    <b>Description: </b> <br/> { this.props.schedule.description }
                </label>
                <label htmlFor="Task Count">
                    <b>Task Count: </b> <br/> { this.props.schedule.tasksCount }
                </label>
                <label htmlFor="Time Period">
                    <b>Time Period: </b> <br/> { this.props.schedule.timePeriod }
                </label>
                <label htmlFor="Interval Type">
                    <b>Interval Type: </b> <br/> { this.props.schedule.intervalType }
                </label>
                <label htmlFor="Start Date">
                    <b>Start Date: </b> <br/> { 
                        this.props.schedule.startDate ? 
                        this.props.schedule.startDate.substring(0, 10) 
                        :
                        null
                    }
                </label>
                <label htmlFor="End Date">
                    <b>End Date: </b> <br/> { 
                        this.props.schedule.endDate ? 
                        this.props.schedule.endDate.substring(0, 10) 
                        :
                        null
                    }
                </label>
            </div>
            <div className="card-footer">
                <button className="btn-main" type="button">
                    {
                        this.props.schedule.isRetired ? 'Unretire' : 'Retire'
                    }
                </button>
            </div>
        </div>
    }

}