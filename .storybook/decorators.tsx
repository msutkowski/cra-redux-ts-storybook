import * as React from "react";
import { Provider } from "react-redux";
import { ConfigureStoreOptions } from "@reduxjs/toolkit";
import { createStore } from "../src/app/store";

type MakeOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export function withStoreProvider<S = any>(options: MakeOptional<ConfigureStoreOptions<S, any, any>, "reducer">) {
  const store = createStore(options);
  return (storyFn: () => JSX.Element) => {
    return <Provider store={store}>{storyFn()}</Provider>;
  };
}
