import { Input } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { InputProps, INPUT_STYLE_KEYS } from "./types";

const meta: Meta<InputProps> = {
  argTypes: {
    styleType: {
      control: { type: "radio" },
      options: Object.values(INPUT_STYLE_KEYS),
    },
  },
  component: Input,
  title: "Components/Input",
} as Meta<InputProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "This is placeholder",
    width: "240px",
    label: "Label",
    styleType: "default",
  },
};
