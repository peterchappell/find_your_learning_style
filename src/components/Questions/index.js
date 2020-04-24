import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import Typography from '@material-ui/core/Typography';

import questions from 'data/questions';

type Props = {
  currentQuestion: number,
  saveAnswer: Function,
};

const useStyles = makeStyles((theme) => ({
  button: {
    margin: [[theme.spacing(2), theme.spacing(2), 0, 0]],
  },
}));

const Questions = (props: Props) => {
  const {
    currentQuestion,
    saveAnswer,
  } = props;
  const classes = useStyles();

  const handleAgree = () => {
    saveAnswer(currentQuestion, true);
  };

  const handleDisagree = () => {
    saveAnswer(currentQuestion, false);
  };

  return (
    <>
      <Typography variant="subtitle2" component="h2">
        Question {currentQuestion + 1} of {questions.length}
      </Typography>
      <Typography variant="h5" component="p">
        {questions[currentQuestion]}
      </Typography>
      <Button
        color="primary"
        size="large"
        startIcon={<CheckIcon />}
        onClick={handleAgree}
        className={classes.button}
      >
        Mostly Agree
      </Button>
      <Button
        color="primary"
        size="large"
        startIcon={<ClearIcon />}
        onClick={handleDisagree}
        className={classes.button}
      >
        Mostly Disagree
      </Button>
    </>
  );
}

export default Questions;
