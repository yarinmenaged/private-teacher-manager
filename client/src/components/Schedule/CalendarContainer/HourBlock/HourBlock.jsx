import React, { useState, useEffect, useCallback } from 'react';
import style from './HourBlock.module.css';
import ConstantsHourBlock from './Constants';
import { Tooltip } from 'monday-ui-react-core';
import EventConnector from '../Event/EventConnector';
import TeacherPreferencesBlock from '../TeacherPreferences/TeacherPreferencesBlock';
import moment from 'moment';
import _ from 'lodash';
import QuarterHourBlock from './QuarterHourBlock/QuarterHourBlock';
import AddEventDialogConnector from '../AddEventDialog/AddEventDialogConnector';

const HourBlock = ({ type = ConstantsHourBlock.BLOCK_TYPES.EVENT, hour, date, events, user_type, user_id, AddEventAction, show_other_user_calendar, subject_id, subject_name, blocked_size, lesson_length }) => {
  const [show_event_dialog, setShowEventDialog] = useState(false);
  const [events_array, setEventsArray] = useState([])

  const events_filtered = useCallback(() => {
    const blocks_date = moment.utc(`${date.format(ConstantsHourBlock.DATE_FORMAT)} ${hour}`);
    return events.filter((event) => {
      const event_date_diff = moment.utc(event.date).diff(blocks_date, 'minutes');
      return event_date_diff < 60 && event_date_diff >= 0;
    }) || [];
  }, [events, date, hour]);

  useEffect(() => {
    if (date)
      setEventsArray(events_filtered());
  }, [date, events_filtered, events]);


  const open_add_event = useCallback((event) => {
    event.stopPropagation();
    event.preventDefault();
    setShowEventDialog(true);
  }, [setShowEventDialog]);

  const close_add_event = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowEventDialog(false);
  }, [setShowEventDialog]);

  const events_render = useCallback(() => {
    let event_number = 0;
    let num_of_rended_quarter = 0;
    if (events_array.length) {
        const max = (60 - events_array[0]?.duration) / 15 + 1;
        const time_obj = moment.utc(`${date.format(ConstantsHourBlock.DATE_FORMAT)} ${hour}`);
        return _.range(15, 75, 15).map((value, index) => {
          let ret;
          const event_time = moment.utc(events_array[event_number]?.date);
          if(time_obj.diff(event_time, 'minutes') === 0){
            ret = <EventConnector key={`event-${events_array[event_number]?.id}-day-${date.format(ConstantsHourBlock.DATE_FORMAT)}`} event={events_array[event_number]} user_type={user_type}></EventConnector>;
            event_number++;
          } else if (time_obj.diff(event_time, 'minutes') && num_of_rended_quarter + events_array.length !== max){
            ret = <QuarterHourBlock key={`hour-${hour}-${value}-day-${date.format(ConstantsHourBlock.DATE_FORMAT)}`} section={value}></QuarterHourBlock>;
            num_of_rended_quarter++;
          } else
            ret = '';
          time_obj.add(15, 'minutes');
          return ret;
        });
    }
  }, [date, hour, events_array, user_type]);

  const content_tool_tip = events_array.length ?
    ConstantsHourBlock.SHOW_MORE_INFO_ON_EVENT
    :
    blocked_size ?
      ConstantsHourBlock.blocked_size
      :
      show_other_user_calendar ?
        ConstantsHourBlock.ADD_NEW_EVENT_TOOLTIP
        :
        ConstantsHourBlock.FREE_BLOCK;

  if (type === ConstantsHourBlock.BLOCK_TYPES.TIME)
    return (
      <div className={style.entry}>
        <time>{hour}</time>
      </div>
    );

  return (<>
  <Tooltip
    immediateShowDelay={0}
    position={Tooltip.positions.BOTTOM}
    content={content_tool_tip} >
    <div className={`${style.entry}`} onClick={open_add_event} style={{ height: `${blocked_size}em` }}>
      {!blocked_size && events_render()}
      {blocked_size && <TeacherPreferencesBlock blocked_size={blocked_size} start={hour}></TeacherPreferencesBlock>}      
    </div>    
  </Tooltip>
  {show_event_dialog && <AddEventDialogConnector
    hour={hour}
    date={date}
    close_call_back={close_add_event}
    events={events_array}></AddEventDialogConnector>}
    </>);
};

export default HourBlock;
