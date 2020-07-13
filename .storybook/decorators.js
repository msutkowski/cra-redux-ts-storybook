import * as React from "react";
import { Provider } from "react-redux";
import { store as defaultStore, createStore } from "../src/app/store";
import { makeDecorator } from "@storybook/addons";

export const withProvider = (store = defaultStore) => (story) => {
  return <Provider store={store}>{story}</Provider>;
};

export const WithRedux = makeDecorator({
  name: "WithRedux",
  parameterName: "preloadedState",
  wrapper: (storyFn, context, { parameters }) => {

    return withProvider(createStore({ preloadedState: parameters }))(storyFn(context));
  },
});
