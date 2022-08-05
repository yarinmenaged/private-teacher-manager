import style from "./WeeklyIncome.module.css";
import { Label } from "monday-ui-react-core";

function WeeklyIncome({ events, price }) {
  const totalWeeklyIncome = () => {
    console.log(events.length);
    console.log({ price });
    return events.length * price;
  };

  return (
    <div className="monday-storybook-label_group">
      <Label
        className={style.incomeText}
        text={`Weekly Income: ${totalWeeklyIncome()}$`}
        color={Label.colors.POSITIVE}
      />
    </div>
  );
}

export default WeeklyIncome;
