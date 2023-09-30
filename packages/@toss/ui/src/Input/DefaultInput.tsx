import styled from "@emotion/styled";
import { ForwardedRef, forwardRef } from "react";
import { InputProps as DefaultInputProps } from "./types";

export const DefaultInput = forwardRef(function DefaultInput(
  { label, width = "100%", onChange, ...props }: DefaultInputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <StyledWrapper width={width}>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput ref={ref} onChange={onChange} {...props} />
    </StyledWrapper>
  );
});

const StyledWrapper = styled.input<DefaultInputProps>`
  display: inline-flex;
  flex-direction: column;
  width: ${({ width }) => width};
`;

const StyledInput = styled.input`
  display: flex;
  align-items: center;

  width: 100%;
  height: 48px;
  padding: 0px 18px;
  border-radius: 8px;

  color: #333d4b;
  background-color: #ffffff;

  font-size: 15px;
  line-height: 48px;
  letter-spacing: normal;
  text-align: start;

  transition:
    background-color 0.2s ease,
    color 0.1s ease,
    box-shadow 0.2s ease;

  box-shadow: inset 0 0 0 1px rgba(0, 27, 55, 0.1);
  &:hover {
    box-shadow: inset 0 0 0 2px #90c2ff;
  }
  &:active {
    box-shadow: inset 0 0 0 2px #3182f6;
  }
`;

const StyledLabel = styled.label`
  display: inline-block;
  padding: 5px 0;
  color: #4e5968;
`;
