import React, { useState, useEffect, useCallback, useRef } from 'react';
import style from './HourBlock.module.css';
import Event from '../Event/Event';
import ConstantsHourBlock from './Constants';
import { Tooltip } from 'monday-ui-react-core';

const HourBlock = ({ type = ConstantsHourBlock.BLOCK_TYPES.EVENT, hour, date, events }) => {
  const [render_event, setRenderEvent] = useState(false);
  const event_obj = useRef(null);
  const event = useCallback(
    () => {
      if(date){
        const blocks_date_in_utc = new Date(`${date.format('MM-DD-YYYY')} ${hour}`).getTime();
        const event_filtered = events.find((event) => {
          const event_date_in_utc = new Date(event.date).getTime();
          return event_date_in_utc === blocks_date_in_utc;
        });
        return event_filtered || null;
      }
      return null;
    },
    [events, date, hour],
  );

  useEffect(() => {
    event_obj.current = event();
    event_obj.current ? setRenderEvent(true) : setRenderEvent(false);
  }, [date, event]);

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
            <div className={style.entry} onClick={() => {alert(`you clicked at block hour: ${hour} on date: ${date.format('DD/MM/YYYY')}`)}}>
              {render_event && <Event event={event_obj.current}></Event>}
            </div>
         </Tooltip>);
};

export default HourBlock;
