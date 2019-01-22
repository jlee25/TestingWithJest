import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
      // take the action and put it in the state
    case FETCH_COMMENTS:
      const comments = action.payload.data.map(comment => comment.name);
      return [...state, ...comments]
    default:
      return state;
  }
}