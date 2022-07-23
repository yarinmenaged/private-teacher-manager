import React from 'react';
import style from './CalendarContainer.module.css';
import HeadersTrack from './HeadersTrack/HeadersTrack';
import TimeTrack from './TimeTrack/TimeTrack';
import _ from 'lodash';
import DayBlock from './DayBlock/DayBlock';
import ConstantsCalendarContainer from './Constants';
import WeekSelectorConnector from './WeekSelector/WeekSelectorConnector';

const CalendarContainer = () => {
    const mock_date = {
        day: 17,
        month: 7,
        year: 2022
    };
  return (
    <div className={style.Calendar_container}> 
        <WeekSelectorConnector></WeekSelectorConnector>
        <div className={style.table}>
            <HeadersTrack type={ConstantsCalendarContainer.HEADERS_TYPES.DATES}></HeadersTrack>
            <HeadersTrack></HeadersTrack>
            <div className={`${style.tracks} ${style.syncscroll}`}>
                <TimeTrack></TimeTrack>
                {_.range(17,24).map((value, index) => {
                    return <DayBlock date={{...mock_date, day: value}} key={`day-${index}`}></DayBlock>
                })}
            </div>    
        </div>
    </div>);
}

export default CalendarContainer;
