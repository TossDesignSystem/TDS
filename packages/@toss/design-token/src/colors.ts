export type Colors = typeof colors;
export type ColorKeys = keyof typeof colors;

export const colors = {
  // system
  black: "#000000",
  white: "#ffffff",

  // blue
  blue50: "#e8f3ff",
  blue100: "#c9e2ff",
  blue200: "#90c2ff",
  blue300: "#64a8ff",
  blue400: "#4593fc",
  blue500: "#3182f6",
  blue600: "#2272eb",
  blue700: "#1b64da",
  blue800: "#1957c2",
  blue900: "#194aa6",

  // light blue
  lightThemeBlue50: "#e8f3ff",
  lightThemeBlue100: "#c9e2ff",
  lightThemeBlue200: "#90c2ff",
  lightThemeBlue300: "#64a8ff",
  lightThemeBlue400: "#4593fc",
  lightThemeBlue500: "#3182f6",
  lightThemeBlue600: "#2272eb",
  lightThemeBlue700: "#1b64da",
  lightThemeBlue800: "#1957c2",
  lightThemeBlue900: "#194aa6",

  // dark blue
  darkThemeBlue50: "#202c4d",
  darkThemeBlue100: "#23386a",
  darkThemeBlue200: "#25478c",
  darkThemeBlue300: "#265ab3",
  darkThemeBlue400: "#2970d9",
  darkThemeBlue500: "#3485fa",
  darkThemeBlue600: "#449bff",
  darkThemeBlue700: "#61b0ff",
  darkThemeBlue800: "#8fcdff",
  darkThemeBlue900: "#c8e7ff",

  // red
  red50: "#fee",
  red100: "#ffd4d6",
  red200: "#feafb4",
  red300: "#fb8890",
  red400: "#f66570",
  red500: "#f04452",
  red600: "#e42939",
  red700: "#d22030",
  red800: "#bc1b2a",
  red900: "#a51926",

  // gray
  gray50: "#f9fafb",
  gray100: "#f2f4f6",
  gray200: "#e5e8eb",
  gray300: "#d1d6db",
  gray400: "#b0b8c1",
  gray500: "#8b95a1",
  gray600: "#6b7684",
  gray700: "#4e5968",
  gray800: "#333d4b",
  gray900: "#191f28",

  // inverseGray
  inverseGray50: "#202027",
  inverseGray100: "#2c2c35",
  inverseGray200: "#3c3c47",
  inverseGray300: "#4d4d59",
  inverseGray400: "#62626d",
  inverseGray500: "#7e7e87",
  inverseGray600: "#9e9ea4",
  inverseGray700: "#c3c3c6",
  inverseGray800: "#e4e4e5",
  inverseGray900: "#ffffff",

  // opacity
  grayOpacity50: "rgba(0,23,51,0.02)",
  grayOpacity100: "rgba(2,32,71,0.05)",
  grayOpacity200: "rgba(0,27,55,0.1)",
  grayOpacity300: "rgba(0,29,58,0.18)",
  grayOpacity400: "rgba(0,29,54,0.31)",
  grayOpacity500: "rgba(3,24,50,0.46)",
  grayOpacity600: "rgba(0,19,43,0.58)",
  grayOpacity700: "rgba(3,18,40,0.7)",
  grayOpacity800: "rgba(0,12,30,0.8)",
  grayOpacity900: "rgba(2,9,19,0.91)",

  // background
  background: "#ffffff",
  grayBackground: "#f2f4f6",
  darkBackground: "#17171c",
  greyBackground: "#f2f4f6",
  darkGreyBackground: "#101013",
  layeredBackground: "#ffffff",
  darkLayeredBackground: "#202027",
  floatBackground: "#ffffff",
  darkFloatBackground: "#2c2c35",

  // ui background
  tToastBackground: "rgba(25,31,40,0.54)",
  darkFillButtonBackground: "#4e5968",
  primaryWeakButtonBackground: "#e8f3ff",
  dangerWeakButtonBackground: "#fee",
  darkWeakButtonBackground: "#f2f4f6",
  lightWeakButtonBackground: "rgba(222,222,255,0.19)",
  buttonPressedAfterBackground: "transparent",
  primaryWeakButtonPressedBackground: "rgba(49,130,246,0.26)",
  dangerWeakButtonPressedBackground: "rgba(244,67,54,0.26)",
  darkWeakButtonPressedBackground: "rgba(78,89,104,0.26)",
  lightWeakButtonPressedBackground: "hsla(0,0%,100%,0.26)",

  // badge
  tBlueBadgeColor: "#1b64da",
  blueBadgeBackground: "rgba(49,130,246,0.16)",
  tealBadgeColor: "#0c8585",
  tealBadgeBackground: "rgba(0,129,138,0.16)",
  greenBadgeColor: "#029359",
  greenBadgeBackground: "rgba(2,162,98,0.16)",
  redBadgeColor: "#d22030",

  // adaptive
  adaptiveBackground: "#ffffff",
  adaptiveGreyBackground: "#f2f4f6",
  adaptiveLayeredBackground: "#ffffff",
  adaptiveFloatBackground: "#ffffff",

  // gradient
  gradientToTop: "linear-gradient(0deg,#fff,hsla(0,0%,100%,0))",
  gradientToRight: "linear-gradient(90deg,#fff,hsla(0,0%,100%,0))",
  gradientToLeft: "linear-gradient(270deg,#fff,hsla(0,0%,100%,0))",
  gradientToBottom: "linear-gradient(180deg,#fff,hsla(0,0%,100%,0))",
  layeredGradientToTop: "linear-gradient(0deg,#fff,hsla(0,0%,100%,0))",
  layeredGradientToBottom: "linear-gradient(180deg,#fff,hsla(0,0%,100%,0))",
} as const;
