import style from "./WeeklyIncome.module.css";
import { Label } from "monday-ui-react-core";

function WeeklyIncome({ events, price }) {
  const totalWeeklyIncome = () => {
    let income = 0;
    events.forEach(event => {
      income += price * (event.duration / 60);
    })
    return income;
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
