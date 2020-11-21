import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global';
import Hooks from './hooks';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Hooks>
        <Routes />
      </Hooks>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
