// @flow
import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, cleanup, screen, fireEvent, waitFor } from 'utils/test-utils';

import AppMain from './index';

jest.mock('../../data/questions', () => ([
  'just one question',
]));

jest.useFakeTimers();

describe('AppMain', () => {
  afterEach(cleanup);

  it('renders', () => {
    const { asFragment } = render(<AppMain />);
    expect(asFragment).toMatchSnapshot();
  });

  it('renders an introduction by default', () => {
    render(<AppMain />);
    expect(screen.queryByTestId('introduction')).toBeTruthy();
    expect(screen.queryByTestId('questions')).toBeFalsy();
    expect(screen.queryByTestId('results')).toBeFalsy();
  });

  it('renders the questions when started', () => {
    render(<AppMain />);
    fireEvent.click(screen.getByText('Let\'s get started'));
    expect(screen.queryByTestId('introduction')).toBeFalsy();
    expect(screen.queryByTestId('questions')).toBeTruthy();
    expect(screen.queryByTestId('results')).toBeFalsy();
  });

  it('renders the results when the last question is answered', async () => {
    const { getByTestId } = render(<AppMain />);
    fireEvent.click(screen.getByText('Let\'s get started'));
    expect(screen.queryByTestId('introduction')).toBeFalsy();
    expect(screen.queryByTestId('questions')).toBeTruthy();
    expect(screen.queryByTestId('results')).toBeFalsy();
    await waitFor(() => {
      expect(getByTestId('agree_button')).toBeInTheDocument();
    });
    await act(async () => {
      jest.advanceTimersByTime(1000);
      fireEvent.click(screen.getByTestId('agree_button'));
      jest.advanceTimersByTime(1000);
      await waitFor(() => {
        expect(getByTestId('results')).toBeInTheDocument();
      });
      expect(screen.queryByTestId('introduction')).toBeFalsy();
      expect(screen.queryByTestId('questions')).toBeFalsy();
      expect(screen.queryByTestId('results')).toBeTruthy();
    });
  });
});
