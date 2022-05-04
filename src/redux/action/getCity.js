import {Alert} from 'react-native';
import {
  GET_USER_CITY_ERROR,
  GET_USER_CITY_REQUEST,
  GET_USER_CITY_SUCCESS,
} from '../../utils/key';
import {apiInstance} from '../../axios_httpClient/index';

export const getCity = id => async dispatch => {
  try {
    dispatch({type: GET_USER_CITY_REQUEST});
    const {data} = await apiInstance.get(`/city/${id}`);
    dispatch({
      type: GET_USER_CITY_SUCCESS,
      payload: data.data,
    });
    console.log('=============== city data=====================');
    console.log(data);
    console.log('====================================');
  } catch (e) {
    dispatch({
      type: GET_USER_CITY_ERROR,
      payload: e.response.data.message,
    });
    Alert.alert(e.response.data.message);
  }
};
