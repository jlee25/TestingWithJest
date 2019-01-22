import React from 'react';
// import ReactDOM from 'react-dom';
import App from 'components/App';
import { shallow } from 'enzyme';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => { // puts this in both it blocks
  wrapped = shallow(<App />);
});

it('shows a comment box', () => {
  // ReactDOM.unmountComponentAtNode(div);
  // // Clean up after a test
  expect(wrapped.find(CommentBox).length).toEqual(1); // find produces an array. We expect there to be one CommentBox
})

it('shows a comment list',() => {
  // const wrapped = shallow(<App />);
  
  expect(wrapped.find(CommentList).length).toEqual(1);
}) 
// // Enzyme gives us the following:

// // Static: Render Component and return HTML
// // Shallow: Renders just the component
// // Full DOM: Render component and children and modify afterwards