import { ThemeProvider } from 'styled-components';
import { ContainerProvider } from './context/ContainerContext';
import { PokemonList } from './pages/PokemonList';

import ResetStyle from './styles/ResetStyle';
import { theme } from './styles/theme';

const App = () => {
  return (
    <>
      <ContainerProvider>
        <ThemeProvider theme={theme}>
          <ResetStyle />
          <PokemonList />
        </ThemeProvider>
      </ContainerProvider>
    </>
  );
};

export default App;
