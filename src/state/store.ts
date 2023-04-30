import {
  configureStore,
  combineReducers,
  MiddlewareArray
} from "@reduxjs/toolkit";
import reducers from "./reducers";
import thunkMiddleware from "redux-thunk";

const nonPersistedReducer = combineReducers(reducers);

const store = configureStore({
  reducer: nonPersistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: new MiddlewareArray().concat(thunkMiddleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
