import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { } from '@devexpress/dx-react-scheduler-material-ui';

const currentDate='2018-11-01';
const schedulerData=[ ];

export default ()=>(
	<Paper>
		<Scheduler data={schedulerData}>
			<ViewState currentDate={currentDate}/>
			<DayView startDayHour={9} endDayHour={14}/>
			<Appointments/>
		</Scheduler>
	</Paper>
);