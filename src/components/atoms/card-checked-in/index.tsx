import checked from "assets/image/checked.png";

export const CardCheckedIn: React.FC = () => {
  return (
    <div className="a-card-checkedin">
      <div className="a-card-checkedin__img-content">
        <img
          className="a-card-checkedin__checkedimg"
          src={checked}
          alt="progress"
        />
      </div>

      <span className="a-card-checkedin__checktext">Checked In</span>
    </div>
  );
};
