import React, { useEffect, useState } from 'react';

import Typography from '@material-ui/core/Typography';

import ResultsItem from 'components/ResultsItem';
import learningTypes from 'data/learningTypes';

type Props = {
  answers: Object,
};

const Results = (props: Props) => {
  const {
    answers,
  } = props;

  const [scoresByLearningType, setScoresByLearningType] = useState([]);

  useEffect(() => {
    const categorisedScores = [];
    Object.keys(learningTypes).forEach((key) => {
      const scoreForThisLearningType = {
        learningTypeKey: key,
        responses: {},
        score: 0,
      };
      learningTypes[key].questionIndexes.forEach((questionIndex) => {
        const answerForCurrentIndex = answers[questionIndex];
        scoreForThisLearningType.responses[questionIndex] = answerForCurrentIndex;
        if (answerForCurrentIndex) {
          scoreForThisLearningType.score += 1;
        }
      });
      categorisedScores.push(scoreForThisLearningType);
    });

    setScoresByLearningType(categorisedScores);
  }, [answers]);

  return (
    <>
      <Typography variant="subtitle1" component="h2" gutterBottom>
        Your learning style profile:
      </Typography>
      {scoresByLearningType.map((learningTypeScore) => (
        <ResultsItem
          key={learningTypeScore.learningTypeKey}
          learningType={learningTypes[learningTypeScore.learningTypeKey]}
          scoreData={learningTypeScore}
        />
      ))}
    </>
  );
}

export default Results;
