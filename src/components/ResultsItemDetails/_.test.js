// @flow
import React from 'react';
import { render, cleanup, screen } from 'utils/test-utils';
import mockLearningTypes from 'data/__mocks/learningTypes';
import mockQuestionsData from 'data/__mocks/questions';

import ResultsItemDetails from './index';

jest.mock('../../data/questions', () => mockQuestionsData);
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

describe('ResultsItemDetails', () => {
  let closeHandler;

  afterEach(cleanup);

  beforeEach(() => {
    closeHandler = jest.fn();
  })

  it('renders', () => {
    const { asFragment } = render(
      <ResultsItemDetails
        isOpen
        closeHandler={closeHandler}
        scoreData={mockScoreData}
        learningType={mockLearningType}
      />
    );
    expect(asFragment).toMatchSnapshot();
  });

  it('renders all the relevant content', () => {
    render(
      <ResultsItemDetails
        isOpen
        closeHandler={closeHandler}
        scoreData={mockScoreData}
        learningType={mockLearningType}
      />
    );
    expect(screen.queryAllByText(mockLearningType.title).length).toBe(2);
    expect(screen.getByText(mockLearningType.description)).toBeTruthy();
    mockLearningType.learnBestWhen.forEach((attribute) => {
      expect(screen.getByText(attribute)).toBeTruthy();
    });
    mockLearningType.learnLeastWhen.forEach((attribute) => {
      expect(screen.getByText(attribute)).toBeTruthy();
    });
    Object.keys(mockScoreData.responses).forEach((responseKey) => {
      expect(screen.getByText(mockQuestionsData[responseKey])).toBeTruthy();
    });
    expect(screen.getAllByTitle('Mostly agree').length).toBe(2);
    expect(screen.getAllByTitle('Mostly disagree').length).toBe(1);
  });
});
