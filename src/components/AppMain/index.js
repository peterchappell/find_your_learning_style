import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Introduction from 'components/Introduction';

const useStyles = makeStyles(() => ({
  mainContainer: {
    marginTop: '100px',
  },
}));

function AppMain() {
  const classes = useStyles();
  const [stage, setStage] = useState('intro');

  const startQuestionnaire = () => {
    setStage('questions');
  }

  return (
    <Container maxWidth="sm" component="main" className={classes.mainContainer}>
      {(stage === 'intro') &&
        <Introduction startHandler={startQuestionnaire} />
      }
      {(stage === 'questions') &&
        <p>Ask questions here...</p>
      }
    </Container>
  );
}

export default AppMain;
