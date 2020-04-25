import React, { useState } from 'react';

import {makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from "@material-ui/core/Divider";
import Typography from '@material-ui/core/Typography';

import ResultsItemDetails from 'components/ResultsItemDetails';

type Props = {
  learningType: Object,
  scoreData: Object,
};

const useStyles = makeStyles((theme) => ({
  learningTypeCard: {
    margin: [[theme.spacing(2), 0]],
  },
  shortDescription: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  divider: {
    margin: [[theme.spacing(2), 0]],
  }
}));

const ResultsItem = (props: Props) => {
  const {
    learningType,
    scoreData,
  } = props;

  const classes = useStyles();

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const openDetails = () => {
    setIsDetailsOpen(true);
  };

  const closeDetails = () => {
    setIsDetailsOpen(false);
  };

  return (
    <Card className={classes.learningTypeCard}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {learningType.title}
        </Typography>
        <Typography variant="body1" component="p" className={classes.shortDescription}>
          {learningType.description}
        </Typography>
        <Divider />
        <Typography variant="subtitle2" component="p" className={classes.shortDescription}>
          Your score
        </Typography>
        <Typography variant="h6" component="p">
          {` ${learningType.getPreferenceFromScore(scoreData.score)}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          size="large"
          onClick={openDetails}
        >
          More details
        </Button>
      </CardActions>
      <ResultsItemDetails
        isOpen={isDetailsOpen}
        closeHandler={closeDetails}
        scoreData={scoreData}
        learningType={learningType}
      />
    </Card>
  );
}

export default ResultsItem;
