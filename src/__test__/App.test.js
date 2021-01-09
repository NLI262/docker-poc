// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


import React from 'react';
import { shallow } from 'enzyme';


import MainComponent from '../App.js';
describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<MainComponent />);

    expect(component).toMatchSnapshot();
  });
});
