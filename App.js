import React, {useEffect} from 'react';
import MainNavigator from './src/navigation/MainNavigation';
import {Provider} from 'react-redux';

import store from './src/redux/store';

const App = () => {
  console.disableYellowBox = true;
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
