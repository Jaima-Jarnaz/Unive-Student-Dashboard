export interface DateProps {
  week: string;
  day: string;
  month: string;
}

export const Date: React.FC<DateProps> = ({ week, day, month }) => {
  return (
    <div className="m-date">
      <div className="m-date__week">{week}</div>
      <div className="m-date__day">{day}</div>
      <div className="m-date__month">{month}</div>
    </div>
  );
};
