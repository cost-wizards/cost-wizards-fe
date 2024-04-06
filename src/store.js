import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

let enhancers;

enhancers = [applyMiddleware(thunk, promise)];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat([]),
  enhancers: [...enhancers],
  devTools: true,
});

export default store;
