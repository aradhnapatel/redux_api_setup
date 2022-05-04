import {
  GET_USER_COUNTRY_REQUEST,
  GET_USER_COUNTRY_SUCCESS,
  GET_USERS_COUNTRY_ERROR,
} from '../../utils/key';

const initialState = {fetching: false, country: [], error: {}};

export const getCountry = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_COUNTRY_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case GET_USER_COUNTRY_SUCCESS:
      return {
        ...state,
        country: action.payload,
        fetching: false,
      };
    case GET_USERS_COUNTRY_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
