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
        color: #ffffff;
        &:hover {
          background-color: #1b64da;
        }
      `;
    case "solidLight":
      return css`
        background-color: #e8f3ff;
        color: #1b64da;
        &:hover {
          background-color: #c9e2ff;
        }
      `;
    case "solidSub":
      return css`
        background-color: #f2f4f6;
        color: #4e5968;
        &:hover {
          background-color: #d1d6db;
        }
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
  transition:
    background-color 0.2s ease,
    color 0.1s ease;
  ${({ styleType }) => styleType && applyButtonColor(styleType)}
  ${({ size }) => size && applyButtonSizeStyle(size)}
  ${({ width }) => width}
`;

export const Styled = { Button };
