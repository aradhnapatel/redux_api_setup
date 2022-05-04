import React from 'react';
import {Provider} from 'react-redux';
import LoginApi from './src/component/LoginApi';
import SignUpApi from './src/component/SignUpApi';
import StackNav from './src/navigation/StackNav';

import configureStore from './src/redux/store/store';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <StackNav />
    </Provider>
  );
};

export default App;
