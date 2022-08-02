import React, { useState, useEffect, useCallback, useRef } from 'react';
import style from './HourBlock.module.css';
import ConstantsHourBlock from './Constants';
import { Tooltip } from 'monday-ui-react-core';
import EventConnector from '../Event/EventConnector';
import TeacherPreferencesBlock from '../TeacherPreferences/TeacherPreferencesBlock';
import moment from 'moment';

const HourBlock = ({ type = ConstantsHourBlock.BLOCK_TYPES.EVENT, hour, date, events, user_type, user_id, AddEventAction, calender_user_id, show_other_user_calendar, subject_id, subject_name, blocked_size, lesson_length }) => {

  const [render_event, setRenderEvent] = useState(false);
  const [event_obj, setEventObj] = useState(null);

  const event_filtered = useCallback((blocks_date)  => {
    return events.find((event) => {
      const event_date = moment.utc(event.date).diff(blocks_date, 'milliseconds');
      return event_date === 0;
    });
  }, [events]);

  const event = useCallback(
    () => {
      if(date){
        const blocks_date = moment.utc(`${date.format(ConstantsHourBlock.DATE_FORMAT)} ${hour}`);             
        return event_filtered(blocks_date) || null;
      }
      return null;
    },
    [date, hour, event_filtered],
  );

  useEffect(() => {
    setEventObj(event());
    event_obj ? setRenderEvent(true) : setRenderEvent(false);
  }, [date, event, event_obj]);

  const hour_block_click_call__back = useCallback((event) => {
    if(!event_obj && !blocked_size)
      AddEventAction(user_id, date, hour, user_type, calender_user_id, subject_id, subject_name, lesson_length);
    else
      event.preventDefault();    
  }, [AddEventAction, user_id, date, hour, user_type, calender_user_id, subject_id, event_obj, blocked_size, subject_name, lesson_length]);

  if (type === ConstantsHourBlock.BLOCK_TYPES.TIME) {
    return (
      <div className={style.entry}>
        <time>{hour}</time>
      </div>
    );
  }

  const content_tool_tip = render_event ? 
                            ConstantsHourBlock.SHOW_MORE_INFO_ON_EVENT 
                            : 
                            blocked_size ?
                            ConstantsHourBlock.blocked_size
                            :
                            show_other_user_calendar ?
                            ConstantsHourBlock.ADD_NEW_EVENT_TOOLTIP 
                            :
                            ConstantsHourBlock.FREE_BLOCK;

  return (<Tooltip 
            immediateShowDelay={0} 
            position={Tooltip.positions.BOTTOM}
            content={content_tool_tip} >
            <div className={`${style.entry}`} onClick={(event) => {hour_block_click_call__back(event)}} style={{height: `${blocked_size}em`}}>
              { render_event && <EventConnector event={event_obj} user_type={user_type}></EventConnector>}
              { blocked_size && <TeacherPreferencesBlock blocked_size={blocked_size} start={hour}></TeacherPreferencesBlock>}
            </div>
         </Tooltip>);
};

export default HourBlock;
