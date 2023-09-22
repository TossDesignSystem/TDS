import { colors } from "./colors";

export type Shadow = typeof shadow;

export const shadow = {
  shadowSmall: `0 0 4px 0 ${colors.grayOpacity100},0 4px 16px 0 ${colors.grayOpacity100}`,
  shadowMedium: `0 8px 16px 0 ${colors.grayOpacity200},0 4px 8px 0 ${colors.grayOpacity100}`,
  shadowLarge: `0 24px 40px 0 ${colors.grayOpacity50},0 16px 24px 0 ${colors.grayOpacity200},0 0 8px 0 ${colors.grayOpacity100}`,
} as const;
