import type { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/globalStyles';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <Container>Ola</Container>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
