import React, { useEffect } from "react";
import style from "./CalendarContainer.module.css";
import HeadersTrack from "./HeadersTrack/HeadersTrack";
import HeadersTrackConnector from "./HeadersTrack/HeadersTrackConnector";
import TimeTrack from "./TimeTrack/TimeTrack";
import _ from "lodash";
import moment from "moment";
import DayBlock from "./DayBlock/DayBlock";
import ConstantsCalendarContainer from "./Constants";
import WeekSelectorConnector from "./WeekSelector/WeekSelectorConnector";

const CalendarContainer = ({ week, GetEventsAction, user_id, teacher_preferences }) => {
	useEffect(() => { 
		GetEventsAction(user_id, week);
	}, [week, GetEventsAction, user_id]);

	return (
		<div className={style.Calendar_container}>
			<div className={style.table}>
				<HeadersTrackConnector></HeadersTrackConnector>
				<div className={`${style.tracks} ${style.syncscroll}`}>
					<TimeTrack></TimeTrack>
					{_.range(0, 7).map((value, index) => {
						const date = moment.utc().week(week).startOf("week").add(value, "d");
						return <DayBlock date={date} key={`day-${index}`} teacher_preferences={teacher_preferences ? teacher_preferences[index]: null}></DayBlock>;
					})}
				</div>
			</div>
		</div>
	);
};

export default CalendarContainer;
