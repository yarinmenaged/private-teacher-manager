import React, { useState } from 'react';
import style from './CalendarContainer.module.css';
import HeadersTrack from './HeadersTrack/HeadersTrack';
import HeadersTrackConnector from './HeadersTrack/HeadersTrackConnector';
import TimeTrack from './TimeTrack/TimeTrack';
import _ from 'lodash';
import moment from 'moment';
import DayBlock from './DayBlock/DayBlock';
import ConstantsCalendarContainer from './Constants';
import WeekSelectorConnector from './WeekSelector/WeekSelectorConnector';

const CalendarContainer = ({ week }) => {
  return (
    <div className={style.Calendar_container}> 
        <WeekSelectorConnector></WeekSelectorConnector>
        <div className={style.table}>
            <HeadersTrackConnector type={ConstantsCalendarContainer.HEADERS_TYPES.DATES}></HeadersTrackConnector>
            <HeadersTrack></HeadersTrack>
            <div className={`${style.tracks} ${style.syncscroll}`}>
                <TimeTrack></TimeTrack>
                {_.range(0, 7).map((value, index) => {
                    const date = moment().week(week).startOf('week').add(value, 'd');
                    return <DayBlock date={date} key={`day-${index}`}></DayBlock>
                })}
            </div>    
        </div>
    </div>);
}

export default CalendarContainer;