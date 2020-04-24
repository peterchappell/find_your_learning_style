import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import AppMain from 'components/AppMain';

function App() {
  return (
    <main>
      <AppBar position="fixed" component="header">
        <Toolbar>
          <Typography variant='h6' component='h1'>
            Find your learning style
          </Typography>
        </Toolbar>
      </AppBar>
      <AppMain />
    </main>
  );
}

export default App;
