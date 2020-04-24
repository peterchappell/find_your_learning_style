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
      <Typography variant="body1" component="div">
        <p>This questionnaire is designed to find out your preferred learning style(s).
          Over the years you have probably developed learning &quot;habits&quot; that
          help you benefit more from some experiences than from others. Since you are
          probably unaware of this, this questionnaire will help you pinpoint your
          learning preferences so that you are in a better position to select learning
          experiences that suit your style and having a greater understanding of those
          that suit the style of others.</p>
        <p>This is an internationally proven tool designed by Peter Honey and Alan Mumford.</p>
        <p>There is no time limit to this questionnaire. It will probably take you 10-15
          minutes. The accuracy of the results depends on how honest you can be. There are
          no right or wrong answers.</p>
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        endIcon={<ArrowForwardIosIcon />}
        onClick={startHandler}
        className={classes.button}
      >
        Let&apos;s get started
      </Button>
    </>
  );
}

export default Introduction;
