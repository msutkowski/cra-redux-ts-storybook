import React, { useEffect } from 'react';
import { Counter } from '../features/counter/Counter';
import { withProvider } from '../../.storybook/decorators'
import { createStore } from '../app/store';
import { incrementByAmount } from '../features/counter/counterSlice';
import { useDispatch } from 'react-redux';

export default {
  title: 'Counter',
  component: Counter,
};

// This seems like the cleanest option
export const CounterSeededByStore = () => withProvider(createStore({ preloadedState: { counter: { value: 10 }}}))(<Counter />);
CounterSeededByStore.story = {
  name: 'Seeded by createStore',
};

const CounterWithUseEffect = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(incrementByAmount(13));
  }, [dispatch]);
  return (<Counter />);
}
// The issue with this approach is that this maintains the state, which is probably not desired?
export const CounterSeededByUseEffect = () => withProvider()(<CounterWithUseEffect />)
CounterSeededByUseEffect.story = {
  name: 'Seeded by useEffect',
};