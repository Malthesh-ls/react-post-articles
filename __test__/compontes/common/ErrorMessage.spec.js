import renderer from 'react-test-renderer';
import ErrorMessage from '../../../src/components/common/ErrorMessage';

describe('ErrorMessage Tests', () => {
  it('should match snapshot', () => {
    const snapshot = renderer
      .create(<ErrorMessage />)
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
