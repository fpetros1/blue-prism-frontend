import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr'

import schedules from './schedules.reducer';
import scheduleLogs from './schedule-log.reducer';
import selectedSchedule from './selected-schedule.reducer';

export default combineReducers({ 
    schedules, 
    scheduleLogs,
    selectedSchedule,
    toastr: toastrReducer
})