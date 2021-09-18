import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Button, buttonProps } from ".";

export default {
  title: "atom/button-story",
  component: Button,
  modifiers: {
    varients: ["primary", "secondary"],
  },
  children: {
    default: "default-button",
  },
};

const Template: Story<buttonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  modifiers: "primary",
  children: "Button green",
};
