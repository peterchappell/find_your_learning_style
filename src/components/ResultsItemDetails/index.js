import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from "@material-ui/core/Divider";
import Typography from '@material-ui/core/Typography';

import questions from 'data/questions';
import ResultsItemAnswer from 'components/ResultsItemAnswer';

type Props = {
  isOpen: boolean,
  closeHandler: Function,
  learningType: Object,
  scoreData: Object,
};

const ResultsItemDetails = (props: Props) => {
  const {
    isOpen,
    closeHandler,
    learningType,
    scoreData,
  } = props;

  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={isOpen}
      scroll="paper"
      aria-labelledby={`dialog-title-${scoreData.learningTypeKey}`}
    >
      <DialogTitle id={`dialog-title-${scoreData.learningTypeKey}`}>
        {learningType.title}
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText component="div">
          <Typography variant="body1" component="p">
            {learningType.description}
          </Typography>
          <Divider variant="middle" />
          <Typography variant="subtitle1" component="p">
            <strong>These were your answers to the {learningType.title} questions:</strong>
          </Typography>
          {learningType.questionIndexes.map((questionIndex) => (
            <ResultsItemAnswer
              questionNumber={questionIndex + 1}
              question={questions[questionIndex]}
              answer={scoreData.responses[questionIndex]}
            />
          ))}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeHandler} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ResultsItemDetails;
