import React from 'react';
import { connect } from 'react-redux';

import IScheduleProps from './schedule.props';
import IAppState from '../../types/app-state.type';
import CardGridElement from '../card-grid-element/card-grid-element.component';
import { selectSchedule, toggleRetireSchedule, unselectSchedule } from '../../redux/actions/schedule.actions';

class Schedule extends React.Component<IScheduleProps, IAppState> {

    constructor(props: IScheduleProps) {
        super(props);

        this.invokeSelectSchedule = this.invokeSelectSchedule.bind(this);
        this.invokeToggleSchedule = this.invokeToggleSchedule.bind(this);
        this.invokeUnselectSchedule = this.invokeUnselectSchedule.bind(this);
        this.isSelectedSchedule = this.isSelectedSchedule.bind(this);
    }

    invokeSelectSchedule() {
        this.props.selectSchedule(this.props.schedule);
    }

    invokeUnselectSchedule() {
        this.props.unselectSchedule();
    }

    invokeToggleSchedule() {
        this.props.toggleRetireSchedule(this.props.schedule);
    }

    retireButtonColor() {
        return this.props.schedule.isRetired ?
        'btn-green' : 'btn-red';
    }

    isSelectedSchedule() {
        const scheduleId = this.props.schedule ? this.props.schedule.id : null;
        const selectedScheduleId = this.props.selectedSchedule ? this.props.selectedSchedule.id : null;
        
        return scheduleId && selectedScheduleId && scheduleId === selectedScheduleId;
    }

    selectedScheduleColor() {
        if (!this.isSelectedSchedule()) {
            return '';
        }

        return 'selected-card'
    }

    render() {
        if (!this.props.schedule) {
            return null;
        }

        return <div className={ `card ${ this.selectedScheduleColor() }` }>
            <div onClick={ 
                this.isSelectedSchedule() ? 
                    this.invokeUnselectSchedule : this.invokeSelectSchedule
                 } className="card-title cursor-pointer">
                <label htmlFor="Schedule Name"><b>{ this.props.schedule.name }</b></label>
            </div>
            <div className="card-content">
                <CardGridElement title="Description" value={ this.props.schedule.description }/>
                <CardGridElement title="Task Count" value={ this.props.schedule.tasksCount }/>
                <CardGridElement title="Time Period" value={ this.props.schedule.timePeriod }/>
                <CardGridElement title="Interval Type" value={ this.props.schedule.intervalType }/>
                <CardGridElement title="Start Date" value={ 
                        this.props.schedule.startDate ? 
                        this.props.schedule.startDate.substring(0, 10) 
                        :
                        null
                    }/>
                <CardGridElement title="End Date" value={ 
                        this.props.schedule.endDate ? 
                        this.props.schedule.endDate.substring(0, 10) 
                        :
                        null
                    } />
            </div>
            <div className="card-footer">
                <button 
                    onClick={ this.invokeToggleSchedule }
                    type="button"
                    className={ `btn-main ${this.retireButtonColor()}` }
                >
                    {
                        this.props.schedule.isRetired ? 'Unretire' : 'Retire'
                    }
                </button>
            </div>
        </div>
    }
}

const mapStateToProps = (state: IAppState) => {
    const { selectedSchedule } = state;

    return { selectedSchedule };
};

export default connect(
    mapStateToProps,
    { selectSchedule, toggleRetireSchedule, unselectSchedule }
)(Schedule);