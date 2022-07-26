import React from 'react';
import moment from 'moment';
import EventConstants from './Constants';
import style from './Event.module.css';

const Event = ({ event, user_type, my_user_id }) => {
  const time = moment(event.date).format(EventConstants.TimeFormat);
  
  if(event.StudentId && event.Student.User_info_id === my_user_id){
    const name_string = `You have a class with this teacher`;
    return (
      <div className={`${style.event} ${style[`color_${event.Subject.id}`]}`}>
          <h3 className={style.title}>You has class with {name_string}</h3>
          <p className={style.text}>{time}</p>
    </div>
    );
    }else{
      let blocked_event_text;
      if(user_type === EventConstants.USER_TYPE.Teacher)
        blocked_event_text = `You blocked this hour.`;
      else 
        blocked_event_text = `The teacher is unavailable at this hour.`;
      return (<div className={`${style.event} ${style.blocked}`}>
                  <h3 className={style.title}>{blocked_event_text}</h3>
                  <p className={style.text}>{time}</p>
            </div>);
    }
}

export default Event;
