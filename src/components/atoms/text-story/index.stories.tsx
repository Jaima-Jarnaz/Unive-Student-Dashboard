import { Text, TextProps } from ".";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "atom/text",
  component: Text,
  argTypes: {
    modifiers: {
      options: ["smalltext", "mediumtext"],
      control: { type: "radio" },
    },
    children: {
      defaultValue: "Normal text",
    },
  },
} as Meta;

export const Template: Story<TextProps> = (args) => <Text {...args} />;

export const SmallText = Template.bind({});
SmallText.args = {
  modifiers: "smalltext",
  children: "Hello I'm Jaima Jarnaz Mim",
};

export const MediumText = Template.bind({});
MediumText.args = {
  modifiers: "mediumtext",
  children: "Learning StoryBook ",
};
