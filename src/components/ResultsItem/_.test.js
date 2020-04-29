import React from 'react';
import { render, cleanup, screen } from 'utils/test-utils';
import mockLearningTypes from 'data/__mocks/learningTypes';

import ResultsItem from './index';

const mockLearningType = mockLearningTypes[Object.keys(mockLearningTypes)[0]];
const mockScoreData = {
  learningTypeKey: Object.keys(mockLearningTypes)[0],
  responses: {
    0: false,
    1: true,
    2: true,
  },
  score: 2,
  scoreCategory: {
    name: 'High',
    min: 2,
    max: 5,
  }
};

describe('ResultsItems', () => {
  afterEach(cleanup);

  it('renders', () => {
    const { asFragment } = render(
      <ResultsItem
        scoreData={mockScoreData}
        learningType={mockLearningType}
      />
    );
    expect(asFragment).toMatchSnapshot();
  });

  it('renders all the relevant content', () => {
    render(
      <ResultsItem
        scoreData={mockScoreData}
        learningType={mockLearningType}
      />
    );
    expect(screen.getByText(mockLearningType.title)).toBeTruthy();
    expect(screen.getByText(mockLearningType.description)).toBeTruthy();
    expect(screen.getByTestId('results_summary')).toBeTruthy();
    expect(screen.getByText(`${mockScoreData.scoreCategory.name}`)).toBeTruthy();
    const questionCountRegex = new RegExp(`.*(${mockScoreData.score}/${mockLearningType.questionIndexes.length})`);
    expect(screen.getByText(questionCountRegex)).toBeTruthy();
  });
});
