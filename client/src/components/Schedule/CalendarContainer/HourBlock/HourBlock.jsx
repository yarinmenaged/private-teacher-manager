import React, { useState, useEffect, useCallback } from 'react';
import style from '../CalendarContainer.module.css';
import Event from '../Event/Event';

const HourBlock = ({ type = 'regular', hour, date, events }) => {
  const [render_event, setRenderEvent] = useState(false);
  const event = useCallback(
    () => {
      if (date) {
        const blocks_date_in_utc = new Date(`${date.month}-${date.day}-${date.year} ${hour}`).getTime();
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
    if (event() !== null) {
      setRenderEvent(true);
    }
  }, []);

  if (type === 'time') {
    return (
      <div className={style.entry}>
        <time>{hour}</time>
      </div>
    );
  }

  return (
    <div className={style.entry}>
      {render_event && <Event event={event()}></Event>}
    </div>
  );
};

export default HourBlock;
