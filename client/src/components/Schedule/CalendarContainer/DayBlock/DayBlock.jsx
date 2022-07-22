import React from 'react';
import HourBlockConnector from '../HourBlock/HourBlockConnector';
import _ from 'lodash';
import style from '../CalendarContainer.module.css';
import moment from 'moment';

const DayBlock = ({ date }) => {
    const start_hour = 7;
    const end_hour = 22;
  return (
    <div className={style.track}>
        {_.range(start_hour, end_hour).map((value, index) => {
            const formatted_time = moment(value.toString(),"LT").format("HH:mm:ss");
            return <HourBlockConnector date={date} hour={formatted_time} key={`time_block-${index}`}></HourBlockConnector>
        })}
      </div>
  );
}

export default DayBlock;
