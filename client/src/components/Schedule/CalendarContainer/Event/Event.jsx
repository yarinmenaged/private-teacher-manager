import React from 'react';
import style from './Event.module.css';

const Event = ({ event }) => {
  return (
    <div className={`${style.event} ${style[`color_${event.subject.id}`]}`}>
        <h3 className={style.title}>StudentId:{event.studentId} has class with TeacherId:{event.teacherId}</h3>
        <p className={style.text}>{event.date}</p>
  </div>
  );
}

export default Event;
