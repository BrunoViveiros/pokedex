import { ThemeProvider } from 'styled-components';

import ResetStyle from './styles/ResetStyle';
import { theme } from './styles/theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResetStyle />
        <h1>Hello World</h1>
      </ThemeProvider>
    </>
  );
};

export default App;
