import React from 'react';
import moment from 'moment';
import EventConstants from './Constants';
import style from './Event.module.css';

const Event = ({ event, user_type }) => {
  const time = moment(event.date).format(EventConstants.TimeFormat);
  
  if(event.Student){
    const name_string = user_type !== EventConstants.USER_TYPE.Teacher ? `Teacher:${event.Teacher.UserInfo.Name}` : `Student:${event.Student.UserInfo.Name}`;
    return (
      <div className={`${style.event} ${style[`color_${event.Subject.id}`]}`}>
          <h3 className={style.title}>You has class with {name_string}</h3>
          <p className={style.text}>{time}</p>
    </div>
    );
    }else
    return (
      <div className={`${style.event} ${style.blocked}`}>
          <h3 className={style.title}>You blocked this hour</h3>
          <p className={style.text}>{time}</p>
    </div>
    );
}

export default Event;
