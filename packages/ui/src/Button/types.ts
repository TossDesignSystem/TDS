import { ButtonHTMLAttributes, ReactNode } from "react";

export const BUTTON_STYLE_KEYS = {
  PRIMARY: "primary",
  SOLID_LIGHT: "solidLight",
  SOLID_SUB: "solidSub",
} as const;

export type ButtonStyleType =
  (typeof BUTTON_STYLE_KEYS)[keyof typeof BUTTON_STYLE_KEYS];
export type ButtonSize = "small" | "medium" | "large";
export type ButtonProps = {
  /**
   * Decide the shape of the Button to be shown.
   * @type "primary" | "solidLight" | "solidSub" | undefined
   */
  styleType?: ButtonStyleType;
  /**
   * Decide the width of Button.
   * @type string | undefined
   */
  width?: string;
  /**
   * Decide the size of Button.
   * @type 'small' | 'medium' | 'large' | undefined
   */
  size?: ButtonSize;
  /**
   * Decide the string to be created inside the Button.
   * @type string
   */
  children: Exclude<ReactNode, undefined | null>;
} & ButtonHTMLAttributes<HTMLButtonElement>;
