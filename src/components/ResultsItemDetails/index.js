import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from "@material-ui/core/Divider";
import Grid from '@material-ui/core/Grid';
import IconButton from "@material-ui/core/IconButton";
import Typography from '@material-ui/core/Typography';

import questions from 'data/questions';

type Props = {
  isOpen: boolean,
  closeHandler: Function,
  learningType: Object,
  scoreData: Object,
  scoreLevel: string,
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
  },
  divider: {
    margin: [[theme.spacing(2), 0]],
  },
  responses: {
    marginTop: theme.spacing(2),
  },
  attributesContainer: {
    margin: [[theme.spacing(2), 0]],
  },
  attributesList: {
    margin: [[theme.spacing(1), 0]],
    paddingLeft: theme.spacing(4),
  }
}));

const ResultsItemDetails = (props: Props) => {
  const {
    isOpen,
    closeHandler,
    learningType,
    scoreData,
    scoreLevel,
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
          <div className={classes.attributesContainer}>
            <Typography variant="body1" component="h3">
              <strong>{learningType.title}s learn best when:</strong>
            </Typography>
            <ul className={classes.attributesList}>
              {learningType.learnBestWhen.map((attribute, index) => {
                const key = `${learningType.title}_learn_best_${index}`;
                return (
                  <Typography variant="body1" component="li" key={key}>
                    {attribute}
                  </Typography>
                );
              })}
            </ul>
          </div>
          <div className={classes.attributesContainer}>
            <Typography variant="body1" component="h3">
              <strong>{learningType.title}s learn least when:</strong>
            </Typography>
            <ul className={classes.attributesList}>
              {learningType.learnLeastWhen.map((attribute, index) => {
                const key = `${learningType.title}_learn_least_${index}`;
                return (
                  <Typography variant="body1" component="li" key={key}>
                    {attribute}
                  </Typography>
                );
              })}
            </ul>
          </div>
          <Divider className={classes.divider} />
          <Typography variant="subtitle1" component="p">
            You agreed with {scoreData.score} of the statements corresponding to the {learningType.title} learning style. Your preference for the <strong>{learningType.title}</strong> learning style is <strong>{scoreLevel}</strong> (Based on general norms for 1302 people).
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="subtitle1" component="p">
            <strong>These were your responses to the {learningType.title} statements:</strong>
          </Typography>
          <div className={classes.responses}>
            {learningType.questionIndexes.map((questionIndex) => (
              <Grid container spacing={3} key={`${learningType.title}_question_${questionIndex}`}>
                <Grid item xs={11}>
                  {questions[questionIndex]}
                </Grid>
                <Grid item xs={1}>
                  { scoreData.responses[questionIndex] ? <CheckIcon /> : <ClearIcon /> }
                </Grid>
              </Grid>
            ))}
          </div>
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
