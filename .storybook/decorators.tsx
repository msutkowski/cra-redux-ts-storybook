import * as React from "react";
import { Provider } from "react-redux";
import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";

type MakeOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export function withStoreProvider<S = any>(options: MakeOptional<ConfigureStoreOptions<S, any, any>, "reducer">) {
  const store = configureStore({
    reducer: (x: any) => x,
    ...options,
  });
  return (storyFn: () => JSX.Element) => {
    return <Provider store={store}>{storyFn()}</Provider>;
  };
}
