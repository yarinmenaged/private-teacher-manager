import _ from "lodash";
import moment from "moment";
import React, { useCallback, useState, useEffect } from "react";
import component_style from "./HeadersTrack.module.css";
import global_style from "../CalendarContainer.module.css";
import ConstantsCalendarContainer from "../Constants";

const HeadersTrack = ({ type = ConstantsCalendarContainer.HEADERS_TYPES.DAYS, week }) => {
	const [array_to_map, setArrayToMap] = useState(ConstantsCalendarContainer.DAYS_IN_WEEK);
	const [scroll, setScroll] = useState(false);
	const getDatesInWeek = useCallback(() => {
		if (week) {
			const start_of_week = moment().week(week).startOf("week");
			const start_of_week_formatted = start_of_week.format(
				ConstantsCalendarContainer.DAY_MONTH_FORMAT
			);
			const end_of_week_formatted = moment()
				.week(week)
				.endOf("week")
				.format(ConstantsCalendarContainer.DAY_MONTH_FORMAT);
			const dates = _.range(1, 6).map((value) => {
				return moment()
					.week(week)
					.startOf("week")
					.add(value, "d")
					.format(ConstantsCalendarContainer.DAY_MONTH_FORMAT);
			});
			return [start_of_week_formatted, ...dates, end_of_week_formatted];
		}
		return [];
	}, [week]);

	useEffect(() => {
		const is_days = type === ConstantsCalendarContainer.HEADERS_TYPES.DAYS;
		is_days
			? setArrayToMap(ConstantsCalendarContainer.DAYS_IN_WEEK)
			: setArrayToMap(getDatesInWeek());
	}, [getDatesInWeek, type, week]);

	useEffect(() => {
		const handleScroll = event => {
			if (window.scrollY > 340)
				setScroll(true);
			else
				setScroll(false);
			console.log(window.scrollY)
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const class_headers = scroll ? `${component_style.sticky} ${component_style.headers}` : ` ${component_style.headers}`;
	return (
		<div className={class_headers}>
			<div className={`${global_style.scroller} ${global_style.syncscroll}`}>
				<div className={`${global_style.track} ${global_style.time}`}>
					<div className={component_style.heading}>{type.label}</div>
				</div>
				{array_to_map.map((value, index) => {
					return (
						<div key={`track-${value}`} className={global_style.track}>
							<div className={component_style.heading}>{value}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default HeadersTrack;
