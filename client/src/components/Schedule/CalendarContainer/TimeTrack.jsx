import React from 'react';
import style from './CalendarContainer.module.css';
import _ from 'lodash';
import HourBlock from './HourBlock/HourBlock';
import moment from 'moment';

const TimeTrack = () => {
    const start_hour = 7;
    const end_hour = 22;
  return (
    <div className={`${style.track} ${style.time}`}>
        {_.range(start_hour, end_hour).map((value, index) => {
            const formatted_time = moment(value.toString(),"LT").format("HH:mm");
            return <HourBlock type='time' hour={formatted_time} key={`time_block-${index}`}></HourBlock>
        })}
      </div>
  )
}

export default TimeTrack
