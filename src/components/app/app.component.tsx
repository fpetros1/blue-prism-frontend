import * as React from 'react';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr'

import ScheduleList from '../schedule-list/schedule-list.component';
import ScheduleLogList from '../schedule-log-list/schedule-log-list.component';
import AppHeader from '../app-header/app-header.component';
import store from '../../redux/store';

export default class App extends React.Component {

    render() { 
        return <Provider store={store}>
            <div className="container" >
                <div className="flex-column m-w-100">
                    <div className="mainTitle">
                        <AppHeader title="Blue Prism"/>
                    </div>
                    <div className="main-content">
                        <div className="flex-column resp-flex-box-30 box-shadow">
                            <div className="schedules-content-wrapper">
                                <AppHeader title="Schedules"/>
                                <div className="schedules-content">
                                    <ScheduleList/>
                                </div>
                            </div>
                        </div>
                        <div className="flex-column resp-flex-box-70 box-shadow">
                            <div className="schedule-logs-content-wrapper">
                                <AppHeader title="Logs"/>
                                <div className="schedule-logs-content">
                                    <ScheduleLogList/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ReduxToastr
                timeOut={4000}
                newestOnTop={true}
                preventDuplicates={false}
                position="bottom-right"
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                progressBar={false}
                closeOnToastrClick
            />
        </Provider>;
    }

}