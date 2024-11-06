import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { counterSlice } from "./Slice";
import { countactSlice } from "./countactSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  countactReducer: countactSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
