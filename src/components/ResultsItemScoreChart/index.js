import React from 'react';

import { makeStyles, lighten, withTheme } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import Tooltip from '@material-ui/core/Tooltip';

type Props = {
  learningType: Object,
  score: number,
  theme: Object,
};

const useStyles = makeStyles((theme) => ({
  chart: {
    backgroundColor: theme.palette.grey['200'],
    margin: [[theme.spacing(1), 0]],
    height: '20px',
    position: "relative",
  },
  categoryMarker: {
    borderRight: `1px solid ${theme.palette.background.paper}`,
    bottom: 0,
    left: 0,
    position: 'absolute',
    top: 0,
    zIndex: 20,
  },
  scoreBar: {
    position: 'absolute',
    left: 0,
    height: '20px',
    top: '0',
  }
}));

const ResultsItemsScoreChart = (props: Props) => {
  const {
    learningType,
    score,
    theme,
  } = props;
  const classes = useStyles();

  const renderScoreBarForCategory = (scoreCategory, scoreCategoryIndex) => {
    let width;
    const bgColor = lighten(theme.palette.primary.main, (10 - learningType.scoreCategories.length - 1 - scoreCategoryIndex)/10)
    const zIndex = 10 - scoreCategoryIndex;
    if (score > scoreCategory.maxScore) {
      width = (scoreCategory.maxScore)/learningType.questionIndexes.length * 100;
      return (
        <div
          className={classes.scoreBar}
          style={{ width: `${width}%`, backgroundColor: `${bgColor}`, zIndex }}
        />
      )
    }
    if (score >= scoreCategory.minScore) {
      width = score/learningType.questionIndexes.length * 100;
      return (
        <div
          className={classes.scoreBar}
          style={{ width: `${width}%`, backgroundColor: `${bgColor}`, zIndex }}
        />
      )
    }
    return null;
  };

  return (
    <div className={classes.chart}>
      { learningType.scoreCategories.map((scoreCategory, scoreCategoryIndex) => {
        const zIndex = 20 - scoreCategoryIndex;
        return (
          <div key={`${learningType.title}_${scoreCategory.name}_bar`}>
            { renderScoreBarForCategory(scoreCategory, scoreCategoryIndex) }
            <Tooltip
              title={`${scoreCategory.name}: ${scoreCategory.minScore} to ${scoreCategory.maxScore}`}
              placement="top-end"
              TransitionComponent={Fade}
            >
              <div
                className={classes.categoryMarker}
                style={{ width: `${(scoreCategory.maxScore)/learningType.questionIndexes.length * 100}%`, zIndex, }}
              />
            </Tooltip>
          </div>
        );
      })}
    </div>
  );
}

export default withTheme(ResultsItemsScoreChart);
