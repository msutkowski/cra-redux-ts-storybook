import * as React from "react";
import { Provider } from "react-redux";
import { store as defaultStore } from "../src/app/store";

export const withProvider = (store = defaultStore) => (story) => {
  return <Provider store={store}>{story}</Provider>;
};
