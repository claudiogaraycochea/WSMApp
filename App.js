import React from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux';

import getStore from './src/store/config/store';
import Main from './src/navigation/Main';

// Remove Yellow Notifications
LogBox.ignoreAllLogs('');

let store = getStore();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>   
  );
}
export default App;
