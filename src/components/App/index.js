import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import AppMain from 'components/AppMain';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    flexShrink: 0,
    margin: [[theme.spacing(2), theme.spacing(3)]],
    textAlign: 'center',
  }
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" component="header">
        <Toolbar>
          <Typography variant='h6' component='h1'>
            Find your learning style
          </Typography>
        </Toolbar>
      </AppBar>
      <AppMain />
      <Typography variant="body2" component="footer" className={classes.footerContainer}>
        {`This tool uses `}
        <Link href="https://en.wikipedia.org/wiki/Learning_styles#Peter_Honey_and_Alan_Mumford's_model" target="_blank" rel="noopener noreferrer" variant="body2">
          Honey and Mumford&apos;s Learning Styles Questionnaire
        </Link>
        . Learning descriptions are taken directly from
        {` `}
        <Link href="https://www.open.edu/openlearn/ocw/pluginfile.php/629607/mod_resource/content/1/t175_4_3.pdf" target="_blank" rel="noopener noreferrer" variant="body2">
          The Open University
        </Link>
        . Your responses will not be stored.
      </Typography>
    </>
  );
}

export default App;
