import { ForwardedRef, forwardRef } from "react";
import { Styled } from "./styled";
import type { ButtonProps } from "./types";

export const Button = forwardRef(function Button(
  {
    styleType = "primary",
    size = "medium",
    width = "100%",
    children,
    ...props
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <Styled.Button
      ref={ref}
      styleType={styleType}
      size={size}
      width={width}
      {...props}
    >
      {children}
    </Styled.Button>
  );
});
