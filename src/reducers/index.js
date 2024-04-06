import { combineReducers } from "redux";

import testAlert from "./testReducer";

const appReducer = combineReducers({
  test: testAlert,
});

export default appReducer;
