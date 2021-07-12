import React from 'react';
import { connect } from 'react-redux';

import IAppState from '../../types/app-state.type';
import IScheduleLogListProps from './schedule-log-list.props';
import { fetchScheduleLogs } from '../../redux/actions/schedule-log.actions';
import IScheduleLog from '../../types/schedule-log.type';
import ScheduleLog from '../schedule-log/schedule-log.component';

class ScheduleLogList extends React.Component<IScheduleLogListProps, IAppState> {

    constructor(props: IScheduleLogListProps) {
        super(props);
    }

    render() {
        return <div className="p-15">
            <div className="flex-row">
                { 
                    this.props.scheduleLogs.length === 0 || !this.props.selectedSchedule ? 
                    <div className="resp-flex-box-70">
                        <h2>No Schedule Selected</h2>
                    </div>
                    :
                    this.props.scheduleLogs.map((scheduleLog: IScheduleLog) => {
                        return <div key={scheduleLog.id} className="m-r-3p resp-flex-box-30">
                            <ScheduleLog scheduleLog={scheduleLog} />
                        </div>
                    })
                }
            </div>
        </div>;
    }

}

const mapStateToProps = (state: IAppState) => {
    const { scheduleLogs, selectedSchedule } = state;

    return { scheduleLogs, selectedSchedule };
};

export default connect(
    mapStateToProps,
    { fetchScheduleLogs }
)(ScheduleLogList);