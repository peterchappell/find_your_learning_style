import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import AppMain from 'components/AppMain';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: theme.palette.background.default,
    flexShrink: 0,
    padding: [[theme.spacing(2), theme.spacing(2)]],
  },
  footerContainerLarge: {
    textAlign: 'center',
    padding: [[theme.spacing(2), theme.spacing(3)]],
  }
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const isLargeDevice = useMediaQuery(theme.breakpoints.up('sm'));

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
      <Typography variant="body2" component="footer" className={`${classes.footerContainer} ${isLargeDevice ? classes.footerContainerLarge : ''}`}>
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
