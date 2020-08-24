import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
//React router dom
import { BrowserRouter } from 'react-router-dom';

//context=>
import UserState from './context/UserState';

//Material ui theme
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './Utils/theme.js';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <UserState>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </UserState>
  </React.StrictMode>,
  document.getElementById('root')
);
