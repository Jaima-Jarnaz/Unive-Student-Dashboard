import React, { useState, ChangeEvent, ChangeEventHandler } from "react";
import Select from "react-select";

function BgColor() {
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

  // const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
  //   ddlvalue(e.target.value);
  // };

  return (
    <div className="a-bgcolor" style={{ backgroundColor: color }}>
      {/* // <style>{"body {baackground-color:" + color + ";}"}</style> */}
      <Select
        className="a-bgcolor__select"
        options={colors}
        onChange={handleInputChange}
      ></Select>
      <h1>Background is:{color}</h1>
    </div>
  );
}

export default BgColor;
