import {Alert} from 'react-native';
import {
  GET_USER_COUNTRY_REQUEST,
  GET_USER_COUNTRY_SUCCESS,
  GET_USER_COUNTRY_ERROR,
} from '../../utils/key';
import {apiInstance} from '../../axios_httpClient/index';

export const getCountry = () => async dispatch => {
  try {
    dispatch({type: GET_USER_COUNTRY_REQUEST});
    const {data} = await apiInstance.get('/state/603f117978a43713f0fed114');
    dispatch({
      type: GET_USER_COUNTRY_SUCCESS,
      payload: data,
    });
   
  } catch (e) {
    dispatch({
      type: GET_USER_COUNTRY_ERROR,
      payload: e.response.data.message,
    });
    Alert.alert(e.response.data.message);
  }
};
