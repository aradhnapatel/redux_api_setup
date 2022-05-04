import {
  GET_USER_CITY_REQUEST,
  GET_USER_CITY_SUCCESS,
  GET_USERS_CITY_ERROR,
} from '../../utils/key';

const initialState = {fetching: false, city: [], error: {}};

export const getCity = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_CITY_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case GET_USER_CITY_SUCCESS:
      return {
        ...state,
        city: action.payload,
        fetching: false,
      };
    case GET_USERS_CITY_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
