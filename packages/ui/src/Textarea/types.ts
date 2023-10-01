import { TextareaHTMLAttributes } from "react";

export type TextareaProps = {
  /**
   * Decide the label message for Textarea.
   * @type string | undefined
   */
  label?: string;
  /**
   * Decide the width of Textarea.
   * @type string | undefined
   */
  width?: string;
  /**
   * Decide the height of Textarea.
   * @type string | undefined
   */
  height?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;
