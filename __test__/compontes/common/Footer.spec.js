import renderer from 'react-test-renderer';
import Footer from '../../../src/components/common/Footer';

describe('Footer Tests', () => {
  it('should match snapshot', () => {
    const snapshot = renderer
      .create(<Footer />)
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
