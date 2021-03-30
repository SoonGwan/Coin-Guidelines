import { createGlobalStyle, DefaultTheme } from 'styled-components';

interface Props {
  basicBg: string;
}

export const GloabalStyle = createGlobalStyle`
  body {
    margin:0;
    padding: 0;
    box-sizing:border-box;
    background:${({ theme }: DefaultTheme) => theme.basicBg};
    color: ${({ theme }: DefaultTheme) => theme.basicFont}
  }
`;
