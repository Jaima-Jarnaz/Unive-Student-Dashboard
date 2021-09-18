import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import MyButton, { MyButtonProps } from ".";

export default {
  title: "atoms/button",
  component: MyButton,
  argTypes: {
    modifiers: {
      options: ["primary", "success", "secondary", "danger"],
      control: { type: "radio" },
    },
    children: {
      defaultValue: "Normal Button",
    },
  },
} as Meta;

const Template: Story<MyButtonProps> = (args) => <MyButton {...args} />;

export const Normal = Template.bind({});

// Normal.args = {
//   modifiers: "primary",
//   children: "Primary Button", // Button name
// };

export const SuccessButton = Template.bind({});

SuccessButton.args = {
  modifiers: "success",
  children: "Success Button",
};

export const SecondaryButton = Template.bind({});

SecondaryButton.args = {
  modifiers: "secondary",
  children: "Secondary Button",
};

export const DangerButton = Template.bind({});

DangerButton.args = {
  modifiers: "danger",
  children: "Danger Button",
};
