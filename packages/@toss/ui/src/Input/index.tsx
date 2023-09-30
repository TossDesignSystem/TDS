import { ForwardedRef, forwardRef } from "react";
import { DefaultInput } from "./DefaultInput";
import { InputProps } from "./types";

const Input = forwardRef(function Input(
  { styleType = "default", ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  switch (styleType) {
    case "default":
      return <DefaultInput {...props} />;
  }
});

export default Input;
