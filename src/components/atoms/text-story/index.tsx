import React from "react";
import classNames from "classnames";
import { mapModifiers } from "lib/utils";
import { ReactNode } from "react";

export interface TextProps {
  children: ReactNode;
  modifiers: "smalltext" | "mediumtext";
  className: string;
}

export const Text: React.FC<TextProps> = ({
  children,
  modifiers = "smalltext",
  className,
}) => (
  <p className={classNames(mapModifiers("a-text-story", modifiers), className)}>
    {children}
  </p>
);
