import React from "react";
import { Provider } from "react-redux";
import AppNavigator from "./src/navigation/AppNavigator";
import store from "./src/redux/store";
import 'react-native-gesture-handler';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
      {/* <AppNa */}
    </Provider>
  );
};

export default App;