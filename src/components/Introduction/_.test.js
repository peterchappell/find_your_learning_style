// @flow
import React from 'react';
import { render, cleanup, screen, fireEvent } from 'utils/test-utils';

import Introduction from './index';

describe('Introduction', () => {
  afterEach(cleanup);

  it('renders', () => {
    const { asFragment } = render(<Introduction />);
    expect(asFragment).toMatchSnapshot();
  });

  it('renders a "get started" button that calls a handler', () => {
    const mockHandler = jest.fn();
    render(<Introduction startHandler={mockHandler} />);
    fireEvent.click(screen.getByTestId('start_button'));
    expect(mockHandler).toBeCalledTimes(1);
  });
});
