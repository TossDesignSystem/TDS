import { Textarea } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { TextareaProps } from "./types";

const meta: Meta<TextareaProps> = {
  component: Textarea,
  title: "Components/Textarea",
} as Meta<TextareaProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "This is placeholder",
    width: "240px",
    height: "100px",
    label: "Label",
  },
};
