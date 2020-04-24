import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';

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
      {scoresByLearningType.map((learningTypeScore) => (
        <div key={learningTypeScore.learningTypeKey}>
          <Typography variant="h5" component="h3">
            {learningTypes[learningTypeScore.learningTypeKey].title}
          </Typography>
          <Typography variant="body1" component="p">
            {learningTypes[learningTypeScore.learningTypeKey].description}
          </Typography>
          <Typography variant="h6" component="p">
            {learningTypes[learningTypeScore.learningTypeKey].getPreferenceFromScore(learningTypeScore.score)}
          </Typography>
        </div>
      ))}
    </>
  );
}

export default Results;
