import React from 'react';
import { render, cleanup, screen, fireEvent } from 'utils/test-utils';
import { act } from "react-dom/test-utils";

import mockQuestionsData from 'data/__mocks/questions';
import Questions from './index';

jest.mock('../../data/questions', () => mockQuestionsData);

jest.useFakeTimers();

describe('Questions', () => {
  let mockSaveAnswerHandler;
  let mockGoBackHandler;

  afterEach(cleanup);

  beforeEach(() => {
    mockSaveAnswerHandler = jest.fn();
    mockGoBackHandler = jest.fn();
  });

  it('renders', () => {
    const { asFragment } = render(
      <Questions
        currentQuestion={0}
        saveAnswer={mockSaveAnswerHandler}
        goBack={mockGoBackHandler}
      />
    );
    expect(asFragment).toMatchSnapshot();
  });

  it('renders a question and a question number', () => {
    const currentQuestionNumber = 0;
    render(
      <Questions
        currentQuestion={currentQuestionNumber}
        saveAnswer={mockSaveAnswerHandler}
        goBack={mockGoBackHandler}
      />
    );
    expect(screen.getByText(mockQuestionsData[currentQuestionNumber])).toBeTruthy();
    expect(screen.getByText(`Question ${currentQuestionNumber + 1} of ${mockQuestionsData.length}`)).toBeTruthy();
  });

  it('renders a back button that calls the go back handler', async () => {
    const currentQuestionNumber = 1;
    render(
      <Questions
        currentQuestion={currentQuestionNumber}
        saveAnswer={mockSaveAnswerHandler}
        goBack={mockGoBackHandler}
      />
    );
    await act(async () => {
      jest.advanceTimersByTime(1000); // allow for transition time
      fireEvent.click(screen.getByTestId('back_button'));
      expect(mockSaveAnswerHandler).toBeCalledTimes(0);
      expect(mockGoBackHandler).toBeCalledTimes(1);
    });
  });

  it('renders an "agree" button that calls save answer with true', async () => {
    const currentQuestionNumber = 0;
    render(
      <Questions
        currentQuestion={currentQuestionNumber}
        saveAnswer={mockSaveAnswerHandler}
        goBack={mockGoBackHandler}
      />
    );
    await act(async () => {
      jest.advanceTimersByTime(1000); // allow for transition time
      fireEvent.click(screen.getByTestId('agree_button'));
      jest.advanceTimersByTime(1000); // allow for transition time
      expect(mockSaveAnswerHandler).toBeCalledTimes(1);
      expect(mockSaveAnswerHandler).toBeCalledWith(currentQuestionNumber, true);
    });
  });

  it('renders a "disagree" button that calls save answer with false', async () => {
    const currentQuestionNumber = 0;
    render(
      <Questions
        currentQuestion={currentQuestionNumber}
        saveAnswer={mockSaveAnswerHandler}
        goBack={mockGoBackHandler}
      />
    );
    await act(async () => {
      jest.advanceTimersByTime(1000); // allow for transition time
      fireEvent.click(screen.getByTestId('disagree_button'));
      jest.advanceTimersByTime(1000); // allow for transition time
      expect(mockSaveAnswerHandler).toBeCalledTimes(1);
      expect(mockSaveAnswerHandler).toBeCalledWith(currentQuestionNumber, false);
    });
  });
});
