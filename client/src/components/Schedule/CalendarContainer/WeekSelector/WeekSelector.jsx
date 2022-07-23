import { React, useEffect, useState, useCallback } from 'react';
import style from './WeekSelector.module.css';
import moment from 'moment';
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';
import ConstantsCalendarContainer from '../Constants';

const WeekSelector = ({ week, AddWeekAction, DecrementWeekAction }) => {
  const [start_of_week, setStartOfWeek] = useState("");
  const [end_of_week, setEndOfWeek] = useState("");

  useEffect(() => {
    setStartOfWeek(moment().week(week).startOf('week').format(ConstantsCalendarContainer.DAY_MONTH_FORMAT));
    setEndOfWeek(moment().week(week).endOf('week').format(ConstantsCalendarContainer.DAY_MONTH_FORMAT));
  }, [week]);

  const increment = useCallback(() => {
      AddWeekAction();
    },
    [AddWeekAction]);

  const decrement = useCallback(() => {
    DecrementWeekAction();
  },
  [DecrementWeekAction]);
    
  
  return (
    <div className={style.week_selector_container}>
      <div className={style.change_week_button} onClick={decrement}>
        <BsFillArrowLeftSquareFill></BsFillArrowLeftSquareFill>
      </div>
      <div className={style.week_range}>
        { start_of_week } - { end_of_week }
      </div>
      <div className={style.change_week_button} onClick={increment}>
        <BsFillArrowRightSquareFill></BsFillArrowRightSquareFill>
      </div>
    </div>
  );
};

export default WeekSelector;
