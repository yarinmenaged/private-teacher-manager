import React from 'react';
import style from '../CalendarContainer.module.css';

const Event = ({ hour, date}) => {
    const rand = Math.floor(Math.random() * 6) + 1;
  return (
    <div className={`${style.event} ${style[`color_${rand}`]}`}>
        <h3>Barak has class with yaren</h3>
        <p>The class will start at: {hour} and will end at: {hour + 0.45}</p>
        <p>{date}</p>
  </div>
  );
}

export default Event;
