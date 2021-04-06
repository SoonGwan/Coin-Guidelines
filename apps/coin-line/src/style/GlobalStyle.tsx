import { createGlobalStyle, DefaultTheme, ThemeProps } from 'styled-components';

export const GloabalStyle = createGlobalStyle`
  body {
    margin:0;
    padding: 0;
    box-sizing:border-box;
    background:${({ theme }: any) => theme.basicBg};
    color: ${({ theme }) => theme.basicFont};
    font-family: Inter, -apple-system, BlinkMacSystemFont, "segoe ui", Roboto, Helvetica, Arial, sans-serif;
  }
`;
