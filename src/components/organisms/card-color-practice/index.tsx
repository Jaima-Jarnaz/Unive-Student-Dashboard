import { Card } from "components/organisms/Card";
import Select from "react-select";
import { useState } from "react";

export const CardColor: React.FC<any> = () => {
  const colors = [
    {
      value: 1,
      label: "green",
    },
    {
      value: 2,
      label: "blue",
    },
    {
      value: 3,
      label: "orange",
    },
  ];

  const [color, ddlvalue] = useState("pink");
  const handleInputChange = (e: any) => {
    ddlvalue(e.label);
  };

  return (
    <div className="o-card-color">
      <div
        className="o-card-color__left-content"
        style={{ backgroundColor: color }}
      >
        <Card />
      </div>
      <div className="o-card-color__right-content">
        <Select
          className="o-card-color____select"
          options={colors}
          onChange={handleInputChange}
        ></Select>
      </div>
    </div>
  );
};
