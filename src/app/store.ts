import {
  configureStore,
  ThunkAction,
  Action,
  ConfigureStoreOptions,
} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

// Export a store creator helper for usage by the stories
export const createStore = (options?: ConfigureStoreOptions) =>
  configureStore({ reducer: { counter: counterReducer }, ...options });

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
