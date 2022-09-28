import { ThemeProvider } from 'styled-components';
import { PokemonList } from './pages/PokemonList';

import ResetStyle from './styles/ResetStyle';
import { theme } from './styles/theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResetStyle />
        <PokemonList />
      </ThemeProvider>
    </>
  );
};

export default App;
