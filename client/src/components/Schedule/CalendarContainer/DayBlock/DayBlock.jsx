import React, { useEffect, useState } from 'react';
import HourBlockConnector from '../HourBlock/HourBlockConnector';
import _ from 'lodash';
import style from '../CalendarContainer.module.css';
import moment from 'moment';
import ConstantsCalendarContainer from '../Constants';

const DayBlock = ({ date, teacher_preferences }) => {
  const start_hour = 7;
  const end_hour = 22;
  const [preferences_start, setPreferencesStart] = useState(moment.utc([]));
  const [preferences_end, setPreferencesEnd] = useState(moment.utc([]));
  const [preferences_diff, setPreferencesDiff] = useState(0);

  useEffect(() => {
    if (teacher_preferences) {
      const format_date = date.format(ConstantsCalendarContainer.DATE_FORMAT);
      const start_time = moment.utc(`${format_date} ${teacher_preferences.start}`);
      const end_time = moment.utc(`${format_date} ${teacher_preferences.end}`);
      setPreferencesStart(start_time);
      setPreferencesEnd(end_time);
      setPreferencesDiff(end_time.diff(start_time, 'hours'));
    }
  }, [teacher_preferences, date])

  return (
    <div className={style.track}>
      {_.range(start_hour, end_hour).map((value, index) => {
        const time_obj = moment.utc(date).hour(value.toString());
        const formatted_start = preferences_start.format(ConstantsCalendarContainer.TIME_FORMAT);
        const formatted_time = time_obj.format(ConstantsCalendarContainer.TIME_FORMAT);
        const diff_start = time_obj.diff(preferences_start, 'hours');
        const diff_end = time_obj.diff(preferences_end, 'hours');
        if (formatted_start === formatted_time) {
          const block_size = (preferences_diff + 1) * 9;
          return <HourBlockConnector date={date} hour={formatted_time} key={`time_block-${index}`} blocked_size={block_size}></HourBlockConnector>
        } else if (diff_end > 0)
          return <HourBlockConnector date={date} hour={formatted_time} key={`time_block-${index}`}></HourBlockConnector>
        else if (diff_start <= 0)
          return <HourBlockConnector date={date} hour={formatted_time} key={`time_block-${index}`}></HourBlockConnector>
        else if (teacher_preferences === null)
          return <HourBlockConnector date={date} hour={formatted_time} key={`time_block-${index}`}></HourBlockConnector>
      })}
    </div>
  );
};

export default DayBlock;
