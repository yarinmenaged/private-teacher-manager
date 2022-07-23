import _ from 'lodash';
import moment from 'moment';
import React, { useCallback } from 'react';
import component_style from './HeadersTrack.module.css';
import global_style from '../CalendarContainer.module.css';
import ConstantsCalendarContainer from '../Constants';

const HeadersTrack = ({ type = ConstantsCalendarContainer.HEADERS_TYPES.DAYS, date = ConstantsCalendarContainer.CURRENT_DATE }) => {
  const getDatesInWeek = useCallback(
    () => {
      const date_obj = moment(date);
      const start_of_week = date_obj.startOf('week');
      const start_of_week_formatted = start_of_week.format(ConstantsCalendarContainer.DAY_MONTH_FORMAT);
      const end_of_week_formatted = date_obj.endOf('week').format(ConstantsCalendarContainer.DAY_MONTH_FORMAT);
      const dates = _.range(1, 6).map((value) => {
        return date_obj.startOf('week').add(value, 'd').format(ConstantsCalendarContainer.DAY_MONTH_FORMAT);
      });
      return [start_of_week_formatted, ...dates, end_of_week_formatted];
    },
    [date],
  );
  const is_days = type === ConstantsCalendarContainer.HEADERS_TYPES.DAYS;
  const array_to_map = is_days ? ConstantsCalendarContainer.DAYS_IN_WEEK : getDatesInWeek(); 

  return (
    <div className={component_style.headers}>      
      <div className={`${global_style.scroller} ${global_style.syncscroll}`}>
        <div className={`${global_style.track} ${global_style.time}`}>
          <div className={component_style.heading}>{type.label}</div>
        </div>
        {array_to_map.map((value, index) => {
          return <div key={`track-${value}`} className={global_style.track}>
                  <div className={component_style.heading}>{value}</div>
                </div>
        })}  
      </div>
    </div>
  );
}

export default HeadersTrack;
