import React from 'react';
import { render, cleanup } from 'utils/test-utils';

import App from './index';

describe('App', () => {
  afterEach(cleanup);

  it('renders', () => {
    const { asFragment } = render(<App />);
    expect(asFragment).toMatchSnapshot();
  });

  it('contains a header, main and footer', () => {
    const { container } = render(<App />);
    expect(container.querySelectorAll(':scope > header').length).toEqual(1);
    expect(container.querySelectorAll(':scope > footer').length).toEqual(1);
    expect(container.querySelectorAll(':scope > main').length).toEqual(1);
  });
});
