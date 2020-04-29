// @flow
import React from 'react';
import { render, cleanup, screen } from 'utils/test-utils';
import mockLearningTypes from 'data/__mocks/learningTypes';

import ResultsItemScoreChart from './index';

const mockLearningType = mockLearningTypes[Object.keys(mockLearningTypes)[0]];
const mockScore = 2;

describe('ResultsItemScoreChart', () => {
  afterEach(cleanup);

  it('renders', () => {
    const { asFragment } = render(
      <ResultsItemScoreChart
        score={mockScore}
        learningType={mockLearningType}
      />
    );
    expect(asFragment).toMatchSnapshot();
  });

  it('renders a bar for each score category', () => {
    render(
      <ResultsItemScoreChart
        score={mockScore}
        learningType={mockLearningType}
      />
    );
    expect(screen.queryAllByTestId('category_marker').length).toEqual(mockLearningType.scoreCategories.length);
    expect(screen.queryAllByTestId('category_bar').length).toEqual(mockLearningType.scoreCategories.length);
  });
});
