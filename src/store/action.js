export function increment() {
  return {
    type: 'increment',
  };
}
export function decrement() {
  return {
    type: 'decrement',
  };
}
export function reset() {
  return {
    type: 'reset',
  };
}
export function updateState(step) {
  return {
    type: 'updateStste',
    paylod: step,
  };
}

export function updateMax(max) {
  return {
    type: 'updateMax',
    payload: max,
  };
}
