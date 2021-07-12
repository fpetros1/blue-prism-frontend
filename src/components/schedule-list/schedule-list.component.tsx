import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAllSchedules } from '../../redux/actions/schedule.actions';

import ScheduleListProps from './schedule-list.props';
import IAppState from '../../types/app-state.type';
import ISchedule from '../../types/schedule.type';
import Schedule from '../schedule/schedule.component';

class ScheduleList extends React.Component<ScheduleListProps, IAppState> {

    constructor(props: ScheduleListProps) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllSchedules();

        setTimeout(() => {
            this.props.fetchAllSchedules();
        }, 5000);
    }

    render() {
        if (this.props.schedules) {
            return <div className="p-15">
                { 
                    this.props.schedules.map((schedule: ISchedule) => {
                        return <Schedule key={schedule.id} schedule={schedule} />
                    }) 
                }
            </div>; 
        }
        return null;
    }

}

const mapStateToProps = (state: IAppState) => {
    const { schedules } = state;

    return { schedules };
};

export default connect(
    mapStateToProps,
    { fetchAllSchedules }
)(ScheduleList);