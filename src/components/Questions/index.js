import React, { useState, useEffect, useRef } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import Fade from '@material-ui/core/Fade';
import IconButton from "@material-ui/core/IconButton";
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import questions from 'data/questions';

type Props = {
  currentQuestion: number,
  saveAnswer: Function,
  goBack: Function,
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
    goBack,
  } = props;
  const classes = useStyles();
  const previousQuestionNumber = useRef();
  const [doFadeIn, setDoFadeIn] = useState(false);
  const [answer, setAnswer] = useState();

  const saveAnswerAfterTransition = () => {
    saveAnswer(currentQuestion, answer);
  }

  const handleAgree = () => {
    setAnswer(true);
    setDoFadeIn(false);
  };

  const handleDisagree = () => {
    setAnswer(false);
    setDoFadeIn(false);
  };

  useEffect(() => {
    if (currentQuestion !== previousQuestionNumber.current) {
      previousQuestionNumber.current = currentQuestion;
      setTimeout(() => {
        setDoFadeIn(true);
      }, 100);
    }
  }, [currentQuestion]);

  return (
    <Fade in={doFadeIn} onExited={saveAnswerAfterTransition}>
      <Card>
        <CardContent>
          <Typography variant="subtitle2" component="h2" color="textSecondary" gutterBottom>
            <Tooltip
              title={currentQuestion ? `Go back to question ${currentQuestion}` : "Go back"}
              aria-label="Go back 1 question"
              placement="top"
              TransitionComponent={Fade}
            >
              <IconButton
                size="small"
                onClick={goBack}
              >
                <ArrowBackIcon />
              </IconButton>
            </Tooltip>
            Question {currentQuestion + 1} of {questions.length}
          </Typography>
          <Typography variant="h5" component="p">
            {questions[currentQuestion]}
          </Typography>
        </CardContent>
        <CardActions>
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
        </CardActions>
      </Card>
    </Fade>
  );
}

export default Questions;
