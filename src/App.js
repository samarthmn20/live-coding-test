import React from "react";
import { Provider } from "react-redux";
import Navigator from "./navigation";
import configureStore from "./store/configureStore";

const { store } = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
