import React from "react";
import global_style from "../CalendarContainer.module.css";
import _ from "lodash";
import HourBlock from "../HourBlock/HourBlock";
import moment from "moment";
import ConstantsHourBlock from "../HourBlock/Constants";

const TimeTrack = () => {
	const start_hour = 7;
	const end_hour = 22;
	return (
		<div className={`${global_style.track} ${global_style.time}`}>
			{_.range(start_hour, end_hour).map((value, index) => {
				const formatted_time = moment(value.toString(), "LT").format("HH:mm");
				return (
					<HourBlock
						type={ConstantsHourBlock.BLOCK_TYPES.TIME}
						hour={formatted_time}
						key={`time_block-${index}`}
					></HourBlock>
				);
			})}
		</div>
	);
};

export default TimeTrack;
