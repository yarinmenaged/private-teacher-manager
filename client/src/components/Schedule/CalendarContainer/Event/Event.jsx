import React from 'react';
import style from './Event.module.css';

const Event = ({ event }) => {
  return (
    <div className={`${style.event} ${style[`color_${event.SubjectId}`]}`}>
        <h3 className={style.title}>StudentId:{event.StudentId} has class with TeacherId:{event.TeacherId}</h3>
        <p className={style.text}>{event.date}</p>
  </div>
  );
}

export default Event;
