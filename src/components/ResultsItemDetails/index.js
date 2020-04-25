import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Typography from '@material-ui/core/Typography';

import questions from 'data/questions';
import ResultsItemAnswer from 'components/ResultsItemAnswer';

type Props = {
  isOpen: boolean,
  closeHandler: Function,
  learningType: Object,
  scoreData: Object,
};

const useStyles = makeStyles((theme) => ({
  headerIcon: {
    flexGrow: 0,
    flexShrink: 0,
    height: '32px',
    margin: [[0, theme.spacing(1), 0, 0]],
    width: '32px',
  },
  headerContent: {
    display: 'flex',
  }
}));

const ResultsItemDetails = (props: Props) => {
  const {
    isOpen,
    closeHandler,
    learningType,
    scoreData,
  } = props;
  const classes = useStyles();

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
        <div className={classes.headerContent}>
          <div className={classes.headerIcon}>
            <IconButton
              aria-label="Go back 1 question"
              size="small"
              onClick={closeHandler}
            >
              <CloseIcon />
            </IconButton>
          </div>
          {learningType.title}
        </div>
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
