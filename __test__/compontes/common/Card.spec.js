import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Card from '../../../src/components/common/Card';
import { mockArticles } from '../../test-helpers/mockData';

describe('Card Tests', () => {
  const props = {
    items: [],
  };
  const newProps = {
    items: mockArticles,
  };
  it('should match snapshot', () => {
    const snapshot = renderer
      .create(<Card {...props} />)
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
  it('should display the card deatils', () => {
    const { getByText } = render(
      <Card {...newProps} />,
    );
    const title = getByText('Dismissed Trump Jurors Describe Intense Days in a Glaring Spotlight');
    expect(title).toBeInTheDocument();
  });
});
