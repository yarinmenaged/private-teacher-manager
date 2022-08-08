import { React, useEffect, useState, useCallback } from 'react';
import style from './WeekSelector.module.css';
import moment from 'moment';
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';
import ConstantsCalendarContainer from '../Constants';

const WeekSelector = ({ week, IncrementWeekAction, DecrementWeekAction }) => {
  const [start_of_week, setStartOfWeek] = useState("");
  const [end_of_week, setEndOfWeek] = useState("");
  const [start_month, setStartMonth] = useState("");
  const [end_month, setEndMonth] = useState("");

  useEffect(() => {
    const start = moment.utc().week(week).startOf('week');
    const end = moment.utc().week(week).endOf('week');
    setStartOfWeek(start.format(ConstantsCalendarContainer.DAY));
    setEndOfWeek(end.format(ConstantsCalendarContainer.DAY));
    setStartMonth(start.format(ConstantsCalendarContainer.MONTH));
    setEndMonth(end.format(ConstantsCalendarContainer.MONTH));
  }, [week]);

  const increment = useCallback(() => {
      IncrementWeekAction();
    },
    [IncrementWeekAction]);

  const decrement = useCallback(() => {
    DecrementWeekAction();
  },
  [DecrementWeekAction]);
    
  
  return (
    <div className={style.week_selector_container}>
      
      <div className={style.week_range}>
        { start_of_week } - { end_of_week }
      </div>
      <div className={style.month}>
        { start_month !==  end_month ? `${start_month} - ${end_month}` : start_month } 
      </div>
      <div className={style.change_week_button} onClick={decrement}>
        {`<`}
      </div>
      <div className={style.change_week_button} onClick={increment}>
        {`>`}
      </div>
    </div>
  );
};

export default WeekSelector;
