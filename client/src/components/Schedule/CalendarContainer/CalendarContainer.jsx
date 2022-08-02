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

const CalendarContainer = ({ week, GetEventsAction, user_id }) => {
	const teacher_pref_mock = [
		{
			start: "08:00",
			end: "12:00"
		},{
			start: "07:00",
			end: "14:00"
		},{
			start: "00:00",
			end: "00:00"
		},{
			start: "07:00",
			end: "14:00"
		},{
			start: "12:00",
			end: "14:00"
		},{
			start: "11:00",
			end: "17:00"
		},{
			start: "00:00",
			end: "00:00"
		}
	];
	useEffect(() => {
		GetEventsAction(user_id, week);
	}, [week, GetEventsAction, user_id]);

	return (
		<div className={style.Calendar_container}>
			<WeekSelectorConnector></WeekSelectorConnector>
			<div className={style.table}>
				<HeadersTrackConnector
					type={ConstantsCalendarContainer.HEADERS_TYPES.DATES}
				></HeadersTrackConnector>
				<HeadersTrack></HeadersTrack>
				<div className={`${style.tracks} ${style.syncscroll}`}>
					<TimeTrack></TimeTrack>
					{_.range(0, 7).map((value, index) => {
						const date = moment.utc().week(week).startOf("week").add(value, "d");
						return <DayBlock date={date} key={`day-${index}`} teacher_preferences={null}></DayBlock>;
					})}
				</div>
			</div>
		</div>
	);
};

export default CalendarContainer;
