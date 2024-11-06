import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SearchProvider from "./Usecontext/useContext.jsx";
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./Redux/store.js";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {/* <React.StrictMode> */}
        <SearchProvider>
          <App />
        </SearchProvider>
      {/* </React.StrictMode> */}
      ,
    </PersistGate>
  </Provider>
);
