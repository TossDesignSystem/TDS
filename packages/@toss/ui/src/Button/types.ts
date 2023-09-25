import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonStyleType = "primary" | "solidLight" | "solidSub";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonProps = {
  /**
   * Decide the shape of the Button to be shown.
   * @type "primary" | undefined
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
