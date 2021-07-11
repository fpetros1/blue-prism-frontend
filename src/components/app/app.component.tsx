import * as React from 'react';
import { Provider } from 'react-redux';

import ScheduleList from '../schedule-list/schedule-list.component';
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
                        <div className="flex-column resp-flex-box-30">
                            <div className="schedules-content-wrapper box-shadow ">
                                <AppHeader title="Schedules"/>
                                <div className="schedules-content">
                                    <ScheduleList/>
                                </div>
                            </div>
                        </div>
                        <div className="flex-column resp-flex-box-70">
                            <div className="schedule-logs-content-wrapper box-shadow">
                                <AppHeader title="Logs"/>
                                <div className="schedule-logs-content">
                                    <ScheduleList/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Provider>;
    }

}