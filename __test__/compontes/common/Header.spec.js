import renderer from 'react-test-renderer';
import Header from '../../../src/components/common/Header';

describe('Header Tests', () => {
  it('should match snapshot', () => {
    const snapshot = renderer
      .create(<Header />)
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
