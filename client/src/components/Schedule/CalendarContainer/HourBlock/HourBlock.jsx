import React, { useState, useEffect, useCallback, useRef } from 'react';
import style from './HourBlock.module.css';
import Event from '../Event/Event';
import ConstantsHourBlock from './Constants';
import { Tooltip } from 'monday-ui-react-core';
import EventConnector from '../Event/EventConnector';

const HourBlock = ({ type = ConstantsHourBlock.BLOCK_TYPES.EVENT, hour, date, events, user_type, user_id, AddEventAction }) => {
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

  const add_event_call__back = useCallback(() => {
    AddEventAction(user_id, date, hour, user_type);
  }, [AddEventAction, user_id, date, hour, user_type]);

  if (type === ConstantsHourBlock.BLOCK_TYPES.TIME) {
    return (
      <div className={style.entry}>
        <time>{hour}</time>
      </div>
    );
  }

  return (<Tooltip 
            immediateShowDelay={0} 
            position={Tooltip.positions.BOTTOM}
            content={ConstantsHourBlock.ADD_NEW_EVENT_TOOLTIP}>
            <div className={`${style.entry}`} onClick={() => {add_event_call__back()}}>
              {render_event && <EventConnector event={event_obj.current} user_type={user_type}></EventConnector>}
            </div>
         </Tooltip>);
};

export default HourBlock;
