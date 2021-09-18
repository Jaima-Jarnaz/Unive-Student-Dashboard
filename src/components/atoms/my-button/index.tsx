import React, { HTMLAttributes, ReactNode } from "react";
import { mapModifiers } from "lib/utils";
import classNames from "classnames";

export interface MyButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  modifiers: "primary" | "success" | "secondary" | "danger";
}

const MyButton: React.FC<MyButtonProps> = ({
  children,
  className,
  modifiers = "primary",
}) => (
  <button
    className={classNames(mapModifiers("a-my-button", modifiers), className)}
  >
    {children}
  </button>
);

export default MyButton;
