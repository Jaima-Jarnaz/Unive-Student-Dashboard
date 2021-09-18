import React, { ReactNode, HtmlHTMLAttributes } from "react";
import classNames from "classnames";
import { mapModifiers } from "lib/utils";
//import { mapModifiers } from "lib/utils";

export interface buttonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  modifiers: "primary" | "secondary";
}

export const Button: React.FC<buttonProps> = ({
  children,
  modifiers,
  className,
}) => (
  <button className={classNames(mapModifiers("a-btn", modifiers), className)}>
    {children}
  </button>
);
