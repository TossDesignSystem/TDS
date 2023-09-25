import { ButtonProps, ButtonSize, ButtonStyleType } from "./types";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const applyButtonSizeStyle = (size: ButtonSize) => {
  switch (size) {
    case "small":
      return css`
        height: 32px;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: normal;
        padding: 7px 12px;
      `;
    case "medium":
      return css`
        height: 40px;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: normal;
        padding: 11px 16px;
      `;
    case "large":
    default:
      return css`
        height: 48px;
        font-size: 17px;
        line-height: 26px;
        letter-spacing: normal;
        padding: 11px 22px;
      `;
  }
};

const applyButtonColor = (styleType: ButtonStyleType) => {
  switch (styleType) {
    case "primary":
      return css`
        background-color: #3182f6;
        color: #f9fafb;
      `;
  }
};

const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  ${({ width }) => width}
  ${({ styleType }) => styleType && applyButtonColor(styleType)}
  ${({ size }) => size && applyButtonSizeStyle(size)}
`;

export const Styled = { Button };
