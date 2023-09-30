import { ForwardedRef, forwardRef } from "react";
import { DefaultInput } from "./DefaultInput";
import { InputProps } from "./types";

export const Input = forwardRef(function Input(
  { styleType = "default", ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  switch (styleType) {
    case "default":
      return <DefaultInput ref={ref} {...props} />;
    default:
      return <DefaultInput ref={ref} {...props} />;
  }
});
