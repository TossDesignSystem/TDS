import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonStyleType = "primary";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonProps = {
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