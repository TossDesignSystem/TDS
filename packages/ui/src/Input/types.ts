import { InputHTMLAttributes } from "react";

export const INPUT_STYLE_KEYS = {
  DEFAULT: "default",
} as const;

type InputStyleType = (typeof INPUT_STYLE_KEYS)[keyof typeof INPUT_STYLE_KEYS];
export type InputProps = {
  /**
   * Decide the shape of the Input to be shown.
   * @type "default" | undefined
   */
  styleType?: InputStyleType;
  /**
   * Decide the label message for Input.
   * @type string | undefined
   */
  label?: string;
  /**
   * Decide the width of Input.
   * @type string | undefined
   */
  width?: string;
} & InputHTMLAttributes<HTMLInputElement>;
