import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistCombineReducers} from 'redux-persist';
import {getCountry} from '../reducer/getCountry';
import {getCity} from '../reducer/getCity';
import {createUser} from '../reducer/createUser';
import {userOtpDetail} from '../reducer/userOtpDetail';

const config = {
  key: 'primary',
  storage: AsyncStorage,
};

export default persistCombineReducers(config, {
  getCountry,
  getCity,
  createUser,
  userOtpDetail,
});
