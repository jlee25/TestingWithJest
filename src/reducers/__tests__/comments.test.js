import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

// Testing the reducer by creating a fake action

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(['New Comment']);
});

// Handling unknown types

// it('handles action with unknown type', () => {
//   const newState = commentsReducer([], { type: 'adaf'});

//   expect(newState).toEqual([]);
// });