import React from "react";
import { Counter } from "../features/counter/Counter";
import { withStoreProvider } from "../../.storybook/decorators";

export default {
  title: "Counter",
  component: Counter,
  decorators: [withStoreProvider({ preloadedState: { counter: { value: 100 } } })],
};

export const WithDefaults = () => <Counter />;
WithDefaults.story = {
  name: "With defaults",
};

export const CounterWithCustomPreloadedState = () => <Counter />;
CounterWithCustomPreloadedState.story = {
  name: "With custom preloaded state",
  decorators: [withStoreProvider({ preloadedState: { counter: { value: 10 } } })],
};
