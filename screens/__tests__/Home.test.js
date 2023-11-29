import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import Home from '../TodoHome';
import Header from '../../components/Header/Header';

// Mocks like this need to be configured at the top level
// of the test file, they can't be setup inside your tests.
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});

it('renders Home correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('show header Bar correctly', () => {
  const { getByText } = render(<Header />);
  const titleText = getByText('Ma liste de taches');
  expect(titleText).toBeTruthy();
});

test('Icon is visible from Home page', () => {
  const { queryByTestId } = render(<Home />);
  const icon = queryByTestId('Add-Icon');
  expect(icon).toBeTruthy();
});
