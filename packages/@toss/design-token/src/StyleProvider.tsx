import {
  CacheProvider,
  EmotionCache,
  Theme,
  ThemeProvider,
  ThemeProviderProps,
} from "@emotion/react";
import { GlobalStyle } from "./global";
import { theme as tossTheme } from "./themes";

type DefaultProps = {
  theme?: Partial<Theme> | ((outerTheme: Theme) => Theme);
} & Omit<ThemeProviderProps, "theme">;
type UseSSRProps = {
  isSSR: true;
  cache: EmotionCache;
} & DefaultProps;
type UseCSRProps = {
  isSSR?: false;
  cache?: never;
} & DefaultProps;

type TossStyleProviderProps = UseSSRProps | UseCSRProps;

export const TossStyleProvider = ({
  isSSR = false,
  cache,
  children,
  theme,
}: TossStyleProviderProps) => {
  if (isSSR && cache) {
    return (
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme || tossTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </CacheProvider>
    );
  } else {
    return (
      <ThemeProvider theme={theme || tossTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    );
  }
};
