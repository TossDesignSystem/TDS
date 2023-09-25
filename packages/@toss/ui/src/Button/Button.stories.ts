import { Button } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { ButtonProps, BUTTON_STYLE_KEYS } from "./types";

const meta: Meta<ButtonProps> = {
  argTypes: {
    children: {
      control: { type: "text" },
    },
    size: {
      control: { type: "radio" },
      options: ["large", "medium", "small"],
    },
    styleType: {
      control: { type: "radio" },
      options: Object.values(BUTTON_STYLE_KEYS),
    },
    onClick: () => console.log("clicked!!"),
  },
  component: Button,
  title: "Components/Button",
} as Meta<ButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    size: "medium",
    styleType: "primary",
  },
};
