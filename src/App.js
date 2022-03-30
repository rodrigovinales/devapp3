import React from 'react';
import AppNavigation from './navigation/index';
import { Provider } from 'react-redux';
import AuthScreen from "./screens/users/AuthScreen"



import store from "./store/index"

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
    // <AuthScreen/>
    
  );
};


export default App;

