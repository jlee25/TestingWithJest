import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import reduxPromise from 'redux-promise';

export default ({ children, initialState = {} }) => {
  const store = createStore(reducers, initialState, applyMiddleware(reduxPromise))

  return (
    <Provider store={store}>
      {children} 
    </Provider>
  )
}

// props.children allows us to take the component and wrap other components. References the App component

// initial state we are going to use CommentsList.test.js. We need initial state to test the list of comments

// We default initial state here because other tests that are not CommentList.test.js does not use initialState