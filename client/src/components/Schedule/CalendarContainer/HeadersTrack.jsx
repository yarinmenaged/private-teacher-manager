import React from 'react';
import style from './CalendarContainer.module.css';

const HeadersTrack = ({ type='time' }) => {
  const days_in_week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
  return (
    <div className={style.headers}>      
      <div className={`${style.scroller} ${style.syncscroll}`} name="myElements">
        <div className={`${style.track} ${style.time}`}>
          <div className={style.heading}>Time</div>
        </div>
        <div className={style.track}>
          <div className={style.heading}>Sunday</div>
        </div>
        <div className={style.track}>
          <div className={style.heading}>Monday</div>
        </div>
        <div className={style.track}>
          <div className={style.heading}>Tuesday</div>
        </div>
        <div className={style.track}>
          <div className={style.heading}>Wednesday</div>
        </div>
        <div className={style.track}>
          <div className={style.heading}>Thursday</div>
        </div>
        <div className={style.track}>
          <div className={style.heading}>Friday</div>
        </div>
        <div className={style.track}>
          <div className={style.heading}>Saturday</div>
        </div>        
      </div>
    </div>
  )
}

export default HeadersTrack;
