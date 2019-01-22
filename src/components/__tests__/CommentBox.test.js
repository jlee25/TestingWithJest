import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

// Root is needed because CommentBox needs access to the Redux Store

beforeEach(() => {
  wrapped = mount(
  <Root>
    <CommentBox />
  </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
})

it('has a text area and a button', () => {

  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {
  beforeEach(() => {
    // Find text area and simulate a change
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' } // this object is similiar to replacing the event argument in handleChange to create a fake event object
    });
    // Force a rerender
    wrapped.update();
  })

  it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment'
    )
  });
  
  it('when form is submitted, text area gets emptied', () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('')
  });
}) // group together certain tests

