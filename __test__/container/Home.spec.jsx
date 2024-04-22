import { render } from '@testing-library/react';
import Home from '../../src/container/Home';

describe('Home Tests', () => {
  it('should contains the Loading text', () => {
    const { getByText } = render(
      <Home />
    );
    const heading = getByText("Loading...");
    expect(heading).toBeInTheDocument();
  });
});