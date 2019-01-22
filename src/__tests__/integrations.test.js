import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: 'Fetch 1'}, { name: 'Fetch 2'}]
  });
});

afterEach(() => {
  moxios.uninstall(); // Don't reuse the stubrequest in another location. Stops it
})

it('can fetch a list of comments and display them', (done) => {
  // render entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )
  // find the fetch comments button and click it
  wrapped.find('.fetch-comments').simulate('click');
  // We need a tiny pause for the moxios to intercept and create a mock request before the expectation below.
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);
    done();
    wrapped.unmount();
  });
});

// done argument runs all the code first and then consider the test to be done