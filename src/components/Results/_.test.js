// @flow
import React from 'react';
import { render, cleanup, screen } from 'utils/test-utils';
import mockLearningTypes from 'data/__mocks/learningTypes';

import Results, { buildCategorisedScores } from './index';

jest.mock('../../data/learningTypes', () => mockLearningTypes);
const mockAnswers = {
  0: false,
  1: true,
  2: true,
  3: false,
  4: true,
};

describe('Results', () => {
  afterEach(cleanup);

  it('renders', () => {
    const { asFragment } = render(<Results answers={mockAnswers} />);
    expect(asFragment).toMatchSnapshot();
  });

  it('renders a summary for each learning type', () => {
    render(<Results answers={mockAnswers} />);
    expect(screen.queryAllByTestId('learning_type_summary').length).toEqual(Object.keys(mockLearningTypes).length);
  });
});

describe('buildCategorisedScores', () => {
  let categorisedScores;

  beforeEach(() => {
    categorisedScores = buildCategorisedScores(mockAnswers);
  })

  it('builds a category for each learning type', () => {
    expect(Object.keys(categorisedScores).length).toEqual(Object.keys(mockLearningTypes).length);
    expect(categorisedScores[0].learningTypeKey).toEqual(Object.keys(mockLearningTypes)[0]);
    expect(categorisedScores[1].learningTypeKey).toEqual(Object.keys(mockLearningTypes)[1]);
  });

  it('stores the responses belonging to each category', () => {
    const categorisedResponses = [
      {
        0: false,
        1: true,
        2: true,
      },
      {
        3: false,
        4: true,
      }
    ]
    expect(categorisedScores[0].responses).toEqual(categorisedResponses[0]);
    expect(categorisedScores[1].responses).toEqual(categorisedResponses[1]);
  });

  it('sets the score for each learning type', () => {
    expect(categorisedScores[0].score).toEqual(2);
    expect(categorisedScores[1].score).toEqual(1);
  });

  it('sets the score category for each learning type', () => {
    expect(categorisedScores[0].scoreCategory.name).toEqual('High');
    expect(categorisedScores[1].scoreCategory.name).toEqual('Low');
  });
});
