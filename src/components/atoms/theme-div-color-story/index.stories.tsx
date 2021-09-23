import React, { Children } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ThemeColorDiv, ThemeColorDivProps } from ".";

export default {
  title: "atoms/theme-div-color",
  components: ThemeColorDiv,
  argTypes: {
    modifiers: {
      options: [
        "theme-lightgreen",
        "theme-skyblue",
        "theme-orange",
        "theme-purple",
      ],
      control: { type: "radio" },
    },
    children: {
      defaultvalue: "theme-purple",
    },
  },
} as Meta;

const Template: Story<ThemeColorDivProps> = (args) => (
  <ThemeColorDiv {...args} />
);

export const ThemeLightGreen = Template.bind({});

ThemeLightGreen.args = {
  modifiers: "theme-lightgreen",
  children: "light-green",
};

export const ThemeSkyBlue = Template.bind({});

ThemeSkyBlue.args = {
  modifiers: "theme-skyblue",
  children: "skyblue",
};

export const ThemeOrange = Template.bind({});

ThemeOrange.args = {
  modifiers: "theme-orange",
  children: "orange",
};

export const ThemePurple = Template.bind({});

ThemePurple.args = {
  modifiers: "theme-purple",
  children: "purple",
};
