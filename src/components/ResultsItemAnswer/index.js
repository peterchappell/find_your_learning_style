import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";

type Props = {
  questionNumber: number,
  question: string,
  answer: boolean,
};

const useStyles = makeStyles((theme) => ({
  button: {
    margin: [[theme.spacing(1), 0, 0, 0]],
  },
  item: {
    margin: [[theme.spacing(2), 0,]],
  },
}));

const ResultsItemAnswer = (props: Props) => {
  const {
    questionNumber,
    question,
    answer,
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.item}>
      <Typography variant="subtitle2" component="h2" color="textSecondary" gutterBottom>
        Question {questionNumber}
      </Typography>
      <Typography variant="body1" component="p">
        {question}
      </Typography>
      { answer ? (
        <Button
          color="primary"
          component="div"
          size="large"
          startIcon={<CheckIcon />}
          className={classes.button}
        >
          Mostly Agree
        </Button>
      ) : (
        <Button
          color="primary"
          component="div"
          size="large"
          startIcon={<ClearIcon />}
          className={classes.button}
        >
          Mostly Disagree
        </Button>
      )}
    </div>
  );
}

export default ResultsItemAnswer;
