/*
 *
 * userAuthority reducer
 *
 */

import {
  USER_AUTHORITY_REQUEST,
  USER_AUTHORITY_FAILURE,
  USER_AUTHORITY_SUCCESS,
} from './constants';

// The initial state
const initialState = {};

function userAuthorityReducer(state = initialState, action) {
  switch (action.type) {
    case USER_AUTHORITY_REQUEST:
      return Object.assign({}, state, {
        isLoading: action.isLoading,
      });
    case USER_AUTHORITY_FAILURE:
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        ...action.payload,
      });
    case USER_AUTHORITY_SUCCESS:
      return Object.assign({}, state, {
        isLoading: action.isLoading,
      });
    default:
      return state;
  }
}

export default userAuthorityReducer;
