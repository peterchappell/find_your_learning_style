import React from 'react';

import {makeStyles} from "@material-ui/core/styles";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

type Props = {
  startHandler: Function,
};

const useStyles = makeStyles((theme) => ({
  button: {
    margin: [[theme.spacing(2), 0, 0, 0]],
  },
}));

const Introduction = (props: Props) => {
  const { startHandler } = props;
  const classes = useStyles();

  return (
    <>
      <Typography variant="body1" component="div" data-testid="introduction">
        <p>This tool helps you understand the way you learn. It is a proven tool
          developed by Peter Honey and Alan Mumford.</p>
        <p>Take as long as you need to do the questionnaire. It will probably take you 10-15
          minutes. The more honest you are, the more accurate your profile will be. Remember
          that there are no right or wrong answers.</p>
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        endIcon={<ArrowForwardIosIcon />}
        onClick={startHandler}
        className={classes.button}
        data-testid="start_button"
      >
        Let&apos;s get started
      </Button>
    </>
  );
}

export default Introduction;
