import React from "react";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <div className="m-0 p-0">
      <Provider store={appStore}>
          <Body />
      </Provider>
    </div>
  );
}

export default App;
