import {USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS} from '../../utils/key';

const initialState = {fetching: false, user: [], error: {}};

export const createUser  = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        fetching: false,
      };
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
