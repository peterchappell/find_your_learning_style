import React, { useState, useEffect } from 'react';

import {makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import ResultsItemsScoreChart from 'components/ResultsItemScoreChart';
import ResultsItemDetails from 'components/ResultsItemDetails';

type Props = {
  learningType: Object,
  scoreData: Object,
};

const useStyles = makeStyles((theme) => ({
  learningTypeCard: {
    margin: [[theme.spacing(2), 0]],
  },
  results: {
    margin: [[theme.spacing(3), 0, 0]],
  }
}));

const ResultsItem = (props: Props) => {
  const {
    learningType,
    scoreData,
  } = props;

  const classes = useStyles();

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [scoreLevel, setScoreLevel] = useState('');

  const openDetails = () => {
    setIsDetailsOpen(true);
  };

  const closeDetails = () => {
    setIsDetailsOpen(false);
  };

  useEffect(() => {
    let scoreCategory = learningType.scoreCategories.find(category => scoreData.score >= category.minScore && scoreData.score <= category.maxScore);
    if (!scoreCategory) {
      [scoreCategory] = learningType.scoreCategories;
    }
    setScoreLevel(scoreCategory.name);
  }, [scoreData, learningType]);

  return (
    <Card className={classes.learningTypeCard}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {learningType.title}
        </Typography>
        <Typography variant="body1" component="p" noWrap gutterBottom>
          {learningType.description}
        </Typography>
        <div className={classes.results}>
          <ResultsItemsScoreChart
            learningType={learningType}
            score={scoreData.score}
          />
          <Typography variant="body1" component="p">
            <strong>{scoreLevel}</strong>
            {` `}
            ({scoreData.score}/{learningType.questionIndexes.length})
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          size="large"
          onClick={openDetails}
        >
          Details
        </Button>
      </CardActions>
      <ResultsItemDetails
        isOpen={isDetailsOpen}
        closeHandler={closeDetails}
        scoreData={scoreData}
        scoreLevel={scoreLevel}
        learningType={learningType}
      />
    </Card>
  );
}

export default ResultsItem;
