// @flow
import './BahnhofsAbfahrten.scss';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { hot } from 'react-hot-loader';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import AbfahrtenList from './AbfahrtenList';
import FavList from './FavList';
import Header from './Header';
import React from 'react';
import SettingsModal from './SettingsModal';

const theme = createMuiTheme({
  overrides: {
    MuiFormControlLabel: {
      root: {
        marginLeft: 0,
      },
    },
  },
  type: 'dark',
});

const BahnhofsAbfahrten = () => (
  <Router>
    <MuiThemeProvider theme={theme}>
      <SettingsModal />
      <div className="BahnhofsAbfahrten">
        <Route path="/" component={Header} />
        <Route path="/" exact component={FavList} />
        <Route path="/:station" component={AbfahrtenList} />
      </div>
    </MuiThemeProvider>
  </Router>
);

export default hot(module)(BahnhofsAbfahrten);
