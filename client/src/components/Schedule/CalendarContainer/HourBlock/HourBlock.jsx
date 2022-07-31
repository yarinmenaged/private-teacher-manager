import React, { useState, useEffect, useCallback, useRef } from 'react';
import style from './HourBlock.module.css';
import Event from '../Event/Event';
import ConstantsHourBlock from './Constants';
import { Tooltip } from 'monday-ui-react-core';
import EventConnector from '../Event/EventConnector';

const HourBlock = ({ type = ConstantsHourBlock.BLOCK_TYPES.EVENT, hour, date, events, user_type, user_id, AddEventAction, calender_user_id, subject_id }) => {
  const [render_event, setRenderEvent] = useState(false);
  const event_obj = useRef(null);
  const event_filtered = useCallback((blocks_date_in_utc)  => {
    return events.find((event) => {
      const event_date_in_utc = new Date(event.date).getTime();
      return event_date_in_utc === blocks_date_in_utc;
    });
  }, [events]);

  const event = useCallback(
    () => {
      if(date){
        const blocks_date_in_utc = new Date(`${date.format(ConstantsHourBlock.DATE_FORMAT)} ${hour}`).getTime();        
        return event_filtered(blocks_date_in_utc) || null;
      }
      return null;
    },
    [date, hour, event_filtered],
  );

  useEffect(() => {
    event_obj.current = event();
    event_obj.current ? setRenderEvent(true) : setRenderEvent(false);
  }, [date, event, events]);

  const hour_block_click_call__back = useCallback((event) => {
    if(!event_obj.current)
      AddEventAction(user_id, date, hour, user_type, calender_user_id, subject_id);
    else
      event.preventDefault();    
  }, [AddEventAction, user_id, date, hour, user_type, calender_user_id, subject_id]);

  if (type === ConstantsHourBlock.BLOCK_TYPES.TIME) {
    return (
      <div className={style.entry}>
        <time>{hour}</time>
      </div>
    );
  }

  const content_tool_tip = render_event ? ConstantsHourBlock.SHOW_MORE_INFO_ON_EVENT : ConstantsHourBlock.ADD_NEW_EVENT_TOOLTIP;

  return (<Tooltip 
            immediateShowDelay={0} 
            position={Tooltip.positions.BOTTOM}
            content={content_tool_tip} >
            <div className={`${style.entry}`} onClick={(event) => {hour_block_click_call__back(event)}}>
              {render_event && <EventConnector event={event_obj.current} user_type={user_type}></EventConnector>}
            </div>
        </Tooltip>);
};

export default HourBlock;
